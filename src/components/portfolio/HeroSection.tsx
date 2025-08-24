import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20 animate-glow-pulse"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-float">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <br />
            <span className="text-foreground">ARPIT SINGH</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer crafting exceptional digital experiences with modern technologies
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary-glow hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a 
             href="https://github.com/theycallmearpit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary-glow transition-all duration-300 hover:scale-110"
             
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/arpit-singh-46bb30356/" 
             target="_blank"
            rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent-blue transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:theycallmearpit43@gmail.com"
              className="text-foreground/60 hover:text-accent-cyan transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-primary-glow transition-all duration-300 animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;