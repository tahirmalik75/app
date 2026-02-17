import { AnimatedBackground } from './components/background/AnimatedBackground';
import { Navigation2 } from './components/Navigation2';

import { Hero2 } from './sections2/Hero2';
import { About2 } from './sections2/About2';
import { Services2 } from './sections2/Services2';
import { Work2 } from './sections2/Work2';
import { Skills2 } from './sections2/Skills2';
import { Experience2 } from './sections2/Experience2';
import { Testimonials2 } from './sections2/Testimonials2';
import { Contact2 } from './sections2/Contact2';
import { Footer2 } from './sections2/Footer2';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation2 />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero2 />
        <About2 />
        <Services2 />
        <Work2 />
        <Skills2 />
        <Experience2 />
        <Testimonials2 />
        <Contact2 />
      </main>
      
      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default App;
