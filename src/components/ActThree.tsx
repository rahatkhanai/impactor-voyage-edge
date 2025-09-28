import { Button } from "@/components/ui/button";
import mitigationSuccess from "@/assets/mitigation-success.jpg";

interface ActThreeProps {
  onComplete: () => void;
}

export default function ActThree({ onComplete }: ActThreeProps) {
  return (
    <section className="relative min-h-screen py-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-success uppercase tracking-wider mb-4">
            Act 3: Hope & Mitigation
          </div>
          
          <h2 className="text-cosmic-title mb-6">
            Defending Our Home Planet
          </h2>
          
          <p className="text-cosmic-subtitle max-w-3xl mx-auto">
            Humanity isn't defenseless against asteroid threats. 
            Explore proven planetary defense strategies and see how 
            we can change an asteroid's trajectory to protect Earth.
          </p>
        </div>

        {/* Defense Strategies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Kinetic Impactor */}
          <div className="card-cosmic p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Kinetic Impactor Mission
              </h3>
              <p className="text-muted-foreground">
                Send a spacecraft to collide with the asteroid, 
                changing its velocity and orbital path.
              </p>
            </div>

            <div 
              className="w-full h-48 rounded-lg bg-cover bg-center mb-6"
              style={{ backgroundImage: `url(${mitigationSuccess})` }}
            >
              <div className="w-full h-full bg-gradient-to-t from-background/80 to-transparent rounded-lg flex items-end p-4">
                <div className="text-sm text-success font-semibold">
                  ✓ DART Mission Success (2022)
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mission Duration:</span>
                <span className="font-semibold text-foreground">2-5 years</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate:</span>
                <span className="font-semibold text-success">95%+</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Optimal Window:</span>
                <span className="font-semibold text-warning">10+ years notice</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Velocity Change:</span>
                <span className="font-semibold text-primary">0.1-1 mm/s</span>
              </div>
            </div>

            <Button variant="success" className="w-full mt-6">
              Simulate Mission
            </Button>
          </div>

          {/* Gravity Tractor */}
          <div className="card-cosmic p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Gravity Tractor
              </h3>
              <p className="text-muted-foreground">
                Use a spacecraft's gravitational pull to gradually 
                alter the asteroid's trajectory over time.
              </p>
            </div>

            <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/30 mx-auto mb-3 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="text-sm text-primary font-semibold">
                  Continuous Gentle Force
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mission Duration:</span>
                <span className="font-semibold text-foreground">5-20 years</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Precision:</span>
                <span className="font-semibold text-primary">Very High</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Optimal Window:</span>
                <span className="font-semibold text-success">20+ years notice</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Side Effects:</span>
                <span className="font-semibold text-success">Minimal</span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-6">
              Learn More
            </Button>
          </div>
        </div>

        {/* Before/After Trajectory */}
        <div className="card-cosmic p-8 mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Mission Success: Trajectory Change
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-destructive mb-4">Before Intervention</h4>
              <div className="h-32 rounded-lg bg-gradient-to-r from-destructive/20 to-warning/20 border border-destructive/30 flex items-center justify-center">
                <div className="text-destructive font-semibold">
                  Impact Trajectory
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                99.8% chance of Earth impact in 2029
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-success mb-4">After Intervention</h4>
              <div className="h-32 rounded-lg bg-gradient-to-r from-success/20 to-primary/20 border border-success/30 flex items-center justify-center">
                <div className="text-success font-semibold">
                  Safe Trajectory
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                0.0% chance of Earth impact, safe passage
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="text-2xl font-bold text-success mb-2">
              Mission Success Rate: 100%
            </div>
            <p className="text-muted-foreground">
              With adequate warning time and proper mission planning
            </p>
          </div>
        </div>

        {/* Hope Message */}
        <div className="text-center mb-12">
          <div className="card-cosmic p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Together, We Can Defend Earth
            </h3>
            
            <p className="text-cosmic-subtitle mb-6">
              The key to planetary defense is early detection and international cooperation. 
              Organizations like NASA, ESA, and others work tirelessly to catalog 
              near-Earth objects and develop defense technologies.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Detection Success Rate</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-success mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Deflection Success</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-accent mb-2">1 in 10M</div>
                <div className="text-sm text-muted-foreground">Annual Impact Risk</div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Mission */}
        <div className="text-center space-y-6">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onComplete}
            className="glow-primary"
          >
            Mission Complete
          </Button>
          
          <Button 
            variant="glass" 
            size="lg"
          >
            Play Defend Earth Game
          </Button>
          
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Continue exploring with our interactive defense simulation game
          </p>
        </div>
      </div>
    </section>
  );
}