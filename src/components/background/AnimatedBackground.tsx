import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Orb configuration
    const orbs = [
      { x: 0.2, y: 0.3, radius: 300, color: '#6366f1', speed: 0.0003, phase: 0 },
      { x: 0.7, y: 0.2, radius: 250, color: '#ec4899', speed: 0.0004, phase: 2 },
      { x: 0.5, y: 0.7, radius: 350, color: '#06b6d4', speed: 0.00035, phase: 4 },
      { x: 0.8, y: 0.6, radius: 200, color: '#8b5cf6', speed: 0.0005, phase: 1 },
      { x: 0.3, y: 0.8, radius: 280, color: '#f43f5e', speed: 0.00025, phase: 3 },
    ];

    const animate = () => {
      time += 1;
      
      // Clear with base color
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each orb
      orbs.forEach((orb) => {
        const centerX = canvas.width * orb.x;
        const centerY = canvas.height * orb.y;
        
        // Calculate floating motion
        const offsetX = Math.sin(time * orb.speed + orb.phase) * 100;
        const offsetY = Math.cos(time * orb.speed * 1.3 + orb.phase) * 80;
        
        const x = centerX + offsetX;
        const y = centerY + offsetY;

        // Create radial gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
        gradient.addColorStop(0, orb.color + '60'); // 37% opacity
        gradient.addColorStop(0.5, orb.color + '20'); // 12% opacity
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(x, y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Add noise texture overlay
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 8;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
      }
      ctx.putImageData(imageData, 0, 0);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ 
        zIndex: 0,
        background: 'linear-gradient(135deg, #050508 0%, #0a0a12 100%)'
      }}
    />
  );
}
