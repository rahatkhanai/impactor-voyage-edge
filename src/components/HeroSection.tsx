import { Button } from "@/components/ui/button";
import Earth3D from "./Earth3D";
import heroSpaceScene from "@/assets/hero-space-scene.jpg";

interface HeroSectionProps {
  onStartTour: () => void;
}

export default function HeroSection({ onStartTour }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSpaceScene})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      </div>

      {/* 3D Earth Scene */}
      <div className="absolute inset-0 opacity-60">
        <Earth3D className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Discovery Alert */}
          <div className="card-cosmic p-6 mb-8 animate-pulse-glow">
            <div className="flex items-center justify-center gap-3 text-warning mb-2">
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                ASTEROID ALERT
              </span>
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse" />
            </div>
            <p className="text-cosmic-subtitle">
              A new Near-Earth Object has been detected on approach trajectory
            </p>
          </div>

          {/* Main Headlines */}
          <div className="space-y-6">
            <h1 className="text-cosmic-hero animate-float">
              IMPACTOR-2025
            </h1>
            
            <h2 className="text-cosmic-title max-w-3xl mx-auto leading-tight">
              We've just discovered something heading our way...
            </h2>
            
            <p className="text-cosmic-subtitle max-w-2xl mx-auto text-xl leading-relaxed">
              Explore what happens when asteroids meet Earth. 
              Learn about impact scenarios, planetary defense, 
              and how we can protect our home planet.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onStartTour}
              className="animate-pulse-glow"
            >
              Start Guided Tour
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="backdrop-blur-lg"
            >
              View Live NEO Data
            </Button>
          </div>

          {/* Mission Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="card-cosmic p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">34,000+</div>
              <div className="text-muted-foreground">Known Near-Earth Objects</div>
            </div>
            
            <div className="card-cosmic p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">2029</div>
              <div className="text-muted-foreground">Next Close Approach (Apophis)</div>
            </div>
            
            <div className="card-cosmic p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">100%</div>
              <div className="text-muted-foreground">Deflection Success Rate Possible</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}