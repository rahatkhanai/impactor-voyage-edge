import { Button } from "@/components/ui/button";
import Earth3D from "./Earth3D";
import heroSpaceScene from "@/assets/hero-space-scene.jpg";
import earthWithAsteroids from "@/assets/earth-with-asteroids.jpg";
import apophisAsteroid from "@/assets/apophis-asteroid.jpg";
import nasaUsgsLogos from "@/assets/nasa-usgs-logos.jpg";

interface HeroSectionProps {
  onStartTour: () => void;
}

export default function HeroSection({ onStartTour }: HeroSectionProps) {
  return (
    <>
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
            <div className="flex justify-center pt-8">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={onStartTour}
                className="animate-pulse-glow"
              >
                Start Guided Tour
              </Button>
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

      {/* Educational Content Boxes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Box 1: Earth + Objects */}
            <div className="card-cosmic p-8 flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
              <div className="flex-shrink-0">
                <img 
                  src={earthWithAsteroids} 
                  alt="Earth surrounded by asteroids" 
                  className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-2xl glow-primary"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-cosmic-title mb-4 text-primary">Did you know?</h3>
                <p className="text-cosmic-subtitle leading-relaxed">
                  There are <span className="text-warning font-bold">34,000</span> known Near-Earth Objects! 
                  A Near-Earth Object (NEO) is any asteroid or comet whose orbit brings it close to Earth's orbit, 
                  specifically within about <span className="text-accent font-bold">45 million kilometers</span> of it.
                </p>
              </div>
            </div>

            {/* Box 2: Apophis */}
            <div className="card-cosmic p-8 flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
              <div className="flex-shrink-0">
                <img 
                  src={apophisAsteroid} 
                  alt="Asteroid Apophis" 
                  className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-2xl glow-accent"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-cosmic-title mb-4 text-accent">
                  The next Near-Earth Object you can see is Apophis
                </h3>
                <p className="text-cosmic-subtitle leading-relaxed">
                  <span className="text-warning font-bold">On April 13, 2029</span>, Apophis will pass safely within 
                  <span className="text-primary font-bold"> 32,000 kilometers</span> of Earth's surface, which is closer than many satellites 
                  in geostationary orbit, making it visible to the naked eye from parts of 
                  <span className="text-accent font-bold"> Europe, Africa, and Asia</span>.
                </p>
              </div>
            </div>

            {/* Box 3: NASA + USGS */}
            <div className="card-cosmic p-8 flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
              <div className="flex-shrink-0">
                <img 
                  src={nasaUsgsLogos} 
                  alt="NASA and USGS logos" 
                  className="w-48 h-48 lg:w-64 lg:h-64 object-contain rounded-2xl glow-success"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-cosmic-title mb-4 text-success">
                  Where NASA is working on detecting and tracking asteroids, USGS is working on the impacts of asteroids on Earth.
                </h3>
                <p className="text-cosmic-subtitle leading-relaxed">
                  <span className="text-primary font-bold">NASA</span> focuses on discovery and monitoring of potentially hazardous objects, 
                  while <span className="text-success font-bold">USGS</span> studies the geological and environmental impacts 
                  these objects could have on our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}