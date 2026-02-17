import { useEffect, useRef, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };

    // Add new point
    pointsRef.current.push({
      x: e.clientX,
      y: e.clientY,
      age: 0,
    });

    // Limit points array
    if (pointsRef.current.length > 50) {
      pointsRef.current = pointsRef.current.slice(-50);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(11, 12, 16, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      const points = pointsRef.current;

      if (points.length > 1) {
        // Create gradient trail
        for (let i = 1; i < points.length; i++) {
          const point = points[i];
          const prevPoint = points[i - 1];

          // Age the point
          point.age += 1;

          // Calculate opacity based on age
          const maxAge = 40;
          const opacity = Math.max(0, 1 - point.age / maxAge);

          if (opacity > 0) {
            // Create gradient for this segment
            const gradient = ctx.createLinearGradient(
              prevPoint.x,
              prevPoint.y,
              point.x,
              point.y
            );

            // Coral to transparent gradient
            const r = 255;
            const g = 77;
            const b = 46;

            gradient.addColorStop(
              0,
              `rgba(${r}, ${g}, ${b}, ${opacity * 0.8})`
            );
            gradient.addColorStop(
              0.5,
              `rgba(${r}, ${g + 40}, ${b + 20}, ${opacity * 0.6})`
            );
            gradient.addColorStop(
              1,
              `rgba(${r}, ${g + 80}, ${b + 40}, ${opacity * 0.3})`
            );

            // Draw line segment
            ctx.beginPath();
            ctx.moveTo(prevPoint.x, prevPoint.y);
            ctx.lineTo(point.x, point.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 12 * opacity;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();

            // Add glow effect
            ctx.shadowBlur = 20 * opacity;
            ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${opacity * 0.5})`;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        // Draw cursor dot
        const lastPoint = points[points.length - 1];
        if (lastPoint) {
          const dotGradient = ctx.createRadialGradient(
            lastPoint.x,
            lastPoint.y,
            0,
            lastPoint.x,
            lastPoint.y,
            12
          );
          dotGradient.addColorStop(0, 'rgba(255, 77, 46, 1)');
          dotGradient.addColorStop(0.5, 'rgba(255, 117, 66, 0.6)');
          dotGradient.addColorStop(1, 'rgba(255, 77, 46, 0)');

          ctx.beginPath();
          ctx.arc(lastPoint.x, lastPoint.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = dotGradient;
          ctx.fill();

          // Inner bright dot
          ctx.beginPath();
          ctx.arc(lastPoint.x, lastPoint.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.fill();
        }
      }

      // Remove old points
      pointsRef.current = points.filter((p) => p.age < 40);

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
      }}
    />
  );
}
