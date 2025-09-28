import { Button } from "@/components/ui/button";
import Earth3D from "./Earth3D";

interface ActOneProps {
  onContinue: () => void;
}

export default function ActOne({ onContinue }: ActOneProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-sm font-bold text-warning uppercase tracking-wider">
                Act 1: Discovery
              </div>
              
              <h2 className="text-cosmic-title">
                A Cosmic Discovery Awaits
              </h2>
              
              <div className="space-y-4 text-cosmic-subtitle">
                <p>
                  Deep in space, telescopes have detected something remarkable – 
                  a near-Earth object designated <span className="text-primary font-semibold">Impactor-2025</span>.
                </p>
                
                <p>
                  This asteroid, roughly 300 meters in diameter, follows an elliptical 
                  orbit that will bring it close to Earth. But what would happen if 
                  its trajectory were just slightly different?
                </p>
                
                <p>
                  Join us on an educational journey to explore asteroid impacts, 
                  understand their effects, and discover how humanity can defend 
                  our planet from cosmic threats.
                </p>
              </div>
            </div>

            {/* Discovery Facts */}
            <div className="card-cosmic p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                About Impactor-2025
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Diameter:</span>
                  <div className="font-semibold text-primary">~300 meters</div>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Composition:</span>
                  <div className="font-semibold text-foreground">Rocky/Metallic</div>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Velocity:</span>
                  <div className="font-semibold text-accent">25 km/s</div>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Classification:</span>
                  <div className="font-semibold text-warning">Potentially Hazardous</div>
                </div>
              </div>
            </div>

            {/* Educational Context */}
            <div className="bg-muted/20 rounded-lg p-6 border-l-4 border-primary">
              <h4 className="font-semibold text-foreground mb-2">Did You Know?</h4>
              <p className="text-sm text-muted-foreground">
                NASA tracks over 34,000 near-Earth objects. While most pose no immediate 
                threat, understanding their behavior helps us prepare for planetary defense.
              </p>
            </div>

            {/* Continue Button */}
            <div className="pt-6">
              <Button 
                variant="cosmic" 
                size="lg" 
                onClick={onContinue}
                className="w-full sm:w-auto"
              >
                Begin Impact Analysis →
              </Button>
            </div>
          </div>

          {/* Right: Interactive 3D Scene */}
          <div className="relative">
            <div className="card-cosmic p-8 h-96">
              <Earth3D className="w-full h-full" />
            </div>
            
            <div className="absolute top-4 right-4 card-cosmic p-3">
              <div className="text-xs text-muted-foreground mb-1">Live Simulation</div>
              <div className="text-sm font-semibold text-primary">
                Orbital Mechanics
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}