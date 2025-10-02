import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";
import { 
  Flame, 
  Globe, 
  Waves, 
  TreePine, 
  Droplets, 
  Wind, 
  Zap,
  AlertTriangle,
  Fish,
  Building2,
  Sun,
  Wheat
} from "lucide-react";

interface ActTwoProps {
  onContinue: () => void;
}

interface ScenarioData {
  id: string;
  title: string;
  description: string;
  infographics: { icon: React.ReactNode; label: string }[];
  videoUrl: string;
  sliders: {
    name: string;
    min: number;
    max: number;
    default: number;
    unit: string;
  }[];
}

const scenarios: Record<string, ScenarioData> = {
  'small': {
    id: 'small',
    title: 'Small Asteroid',
    description: 'Most small asteroids burn up in Earth\'s atmosphere. They create a bright streak in the sky, but rarely cause any damage on the ground.',
    infographics: [
      { icon: <Flame className="w-6 h-6" />, label: 'fire' },
      { icon: <Globe className="w-6 h-6" />, label: 'atmosphere' },
      { icon: <Zap className="w-6 h-6 text-green-400" />, label: 'harmless' }
    ],
    videoUrl: '/videos/small_asteroid.mp4',
    sliders: [
      { name: 'Asteroid Size', min: 1, max: 50, default: 10, unit: 'm' },
      { name: 'Velocity', min: 11, max: 25, default: 17, unit: 'km/s' },
      { name: 'Entry Angle', min: 15, max: 90, default: 45, unit: '°' }
    ]
  },
  'medium-ground': {
    id: 'medium-ground',
    title: 'Medium Asteroid – Hitting Ground',
    description: 'A medium asteroid that survives entry and hits land can shake the ground, destroy trees, and damage buildings nearby.',
    infographics: [
      { icon: <AlertTriangle className="w-6 h-6" />, label: 'earthquake' },
      { icon: <TreePine className="w-6 h-6" />, label: 'trees' },
      { icon: <Building2 className="w-6 h-6" />, label: 'buildings' },
      { icon: <Zap className="w-6 h-6" />, label: 'shockwave' }
    ],
    videoUrl: '/videos/medium_asteroid_hitting_ground.mp4',
    sliders: [
      { name: 'Asteroid Size', min: 50, max: 200, default: 100, unit: 'm' },
      { name: 'Velocity', min: 15, max: 30, default: 20, unit: 'km/s' },
      { name: 'Ground Hardness', min: 1, max: 10, default: 5, unit: '' }
    ]
  },
  'medium-water': {
    id: 'medium-water',
    title: 'Medium Asteroid – Hitting Water',
    description: 'A medium asteroid falling into the ocean creates high tides and pollutes water with ash and dust, killing fish in the area.',
    infographics: [
      { icon: <Waves className="w-6 h-6" />, label: 'waves' },
      { icon: <Fish className="w-6 h-6" />, label: 'fish' },
      { icon: <Droplets className="w-6 h-6 text-orange-400" />, label: 'pollution' }
    ],
    videoUrl: '/videos/medium_asteroid_hitting_earth.mp4',
    sliders: [
      { name: 'Asteroid Size', min: 50, max: 200, default: 120, unit: 'm' },
      { name: 'Water Depth', min: 100, max: 5000, default: 1000, unit: 'm' },
      { name: 'Distance to Shore', min: 10, max: 500, default: 50, unit: 'km' }
    ]
  },
  'big-forest': {
    id: 'big-forest',
    title: 'Big Asteroid – Hitting Forest',
    description: 'A massive asteroid impact in a forest causes firestorms, thermal radiation, and shockwaves that destroy everything in a wide area.',
    infographics: [
      { icon: <Flame className="w-6 h-6" />, label: 'fire' },
      { icon: <Zap className="w-6 h-6" />, label: 'shockwave' },
      { icon: <TreePine className="w-6 h-6" />, label: 'forest' },
      { icon: <Sun className="w-6 h-6" />, label: 'radiation' }
    ],
    videoUrl: '/videos/big_asteroid_hitting_forest.mp4',
    sliders: [
      { name: 'Asteroid Size', min: 200, max: 1000, default: 500, unit: 'm' },
      { name: 'Forest Density', min: 1, max: 10, default: 7, unit: '' },
      { name: 'Wind Speed', min: 0, max: 50, default: 15, unit: 'km/h' }
    ]
  },
  'big-water': {
    id: 'big-water',
    title: 'Big Asteroid – Hitting Water',
    description: 'When a big asteroid crashes into the ocean, tsunamis form instantly. Water vaporizes, animals die, and waves spread for kilometers.',
    infographics: [
      { icon: <Waves className="w-6 h-6 text-blue-400" />, label: 'tsunami' },
      { icon: <Waves className="w-6 h-6" />, label: 'waves' },
      { icon: <Fish className="w-6 h-6" />, label: 'animals' },
      { icon: <Zap className="w-6 h-6" />, label: 'explosion' }
    ],
    videoUrl: '/videos/big_asteroid_hitting_water.mp4',
    sliders: [
      { name: 'Asteroid Size', min: 300, max: 2000, default: 800, unit: 'm' },
      { name: 'Ocean Depth', min: 1000, max: 11000, default: 4000, unit: 'm' },
      { name: 'Coastal Population', min: 0, max: 10000000, default: 1000000, unit: ' people' }
    ]
  },
  'downstream': {
    id: 'downstream',
    title: 'Downstream Effect',
    description: 'Debris and sediment flow through rivers after an impact, polluting water supplies, harming biodiversity, and reshaping ecosystems.',
    infographics: [
      { icon: <Waves className="w-6 h-6 text-blue-600" />, label: 'river' },
      { icon: <TreePine className="w-6 h-6 text-green-400" />, label: 'biodiversity' },
      { icon: <Droplets className="w-6 h-6 text-orange-400" />, label: 'pollution' },
      { icon: <Droplets className="w-6 h-6 text-blue-400" />, label: 'water drop' }
    ],
    videoUrl: '/videos/downstream_effect.mp4',
    sliders: [
      { name: 'River Flow Rate', min: 100, max: 10000, default: 2000, unit: ' m³/s' },
      { name: 'Debris Amount', min: 1, max: 100, default: 40, unit: ' million tons' },
      { name: 'Distance Traveled', min: 10, max: 1000, default: 200, unit: ' km' }
    ]
  },
  'downwind': {
    id: 'downwind',
    title: 'Downwind Effect',
    description: 'Dust and ash spread through the air, blocking sunlight. Crops fail, food chains collapse, and rain patterns shift globally.',
    infographics: [
      { icon: <Wind className="w-6 h-6" />, label: 'dust cloud' },
      { icon: <Sun className="w-6 h-6 text-gray-400" />, label: 'no-sun' },
      { icon: <Wheat className="w-6 h-6" />, label: 'crops' },
      { icon: <Fish className="w-6 h-6" />, label: 'food chain' }
    ],
    videoUrl: '/videos/downwind_effect.mp4',
    sliders: [
      { name: 'Wind Speed', min: 5, max: 100, default: 25, unit: ' km/h' },
      { name: 'Dust Density', min: 1, max: 100, default: 60, unit: ' mg/m³' },
      { name: 'Affected Area', min: 100, max: 50000, default: 5000, unit: ' km²' }
    ]
  }
};

export default function ActTwo({ onContinue }: ActTwoProps) {
  const navigate = useNavigate();
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [sliderValues, setSliderValues] = useState<Record<string, number>>({});
  const scenarioDetailRef = useRef<HTMLDivElement>(null);

  const handleNodeClick = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    
    // Initialize slider values
    const scenario = scenarios[scenarioId];
    if (scenario) {
      const initialValues: Record<string, number> = {};
      scenario.sliders.forEach(slider => {
        initialValues[slider.name] = slider.default;
      });
      setSliderValues(initialValues);
    }

    // Smooth scroll to detail section
    setTimeout(() => {
      scenarioDetailRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const TreeNode = ({ 
    children, 
    onClick, 
    isClickable = false, 
    className = "",
    delay = 0 
  }: { 
    children: React.ReactNode;
    onClick?: () => void;
    isClickable?: boolean;
    className?: string;
    delay?: number;
  }) => (
    <div 
      className={`
        relative p-4 rounded-xl border-2 transition-all duration-300
        animate-fade-in
        ${isClickable 
          ? 'border-primary/40 bg-card/60 backdrop-blur-sm cursor-pointer hover:border-primary hover:bg-primary/10 hover:scale-105 hover:shadow-lg hover:shadow-primary/20' 
          : 'border-muted/30 bg-muted/20'
        }
        ${className}
      `}
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-center font-semibold text-sm">
        {children}
      </div>
      {isClickable && (
        <div className="absolute inset-0 rounded-xl bg-primary/0 hover:bg-primary/5 transition-all duration-300" />
      )}
    </div>
  );

  const TreeConnection = ({ className = "" }: { className?: string }) => (
    <div className={`w-px h-8 bg-gradient-to-b from-primary/60 to-primary/20 ${className}`} />
  );

  const HorizontalConnection = ({ className = "" }: { className?: string }) => (
    <div className={`h-px flex-1 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 ${className}`} />
  );

  return (
    <section className="relative min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-cosmic-hero mb-8 animate-fade-in">
            Asteroid Impact Simulation
          </h1>
        </div>

        {/* Tree Navigation Diagram */}
        <div className="max-w-6xl mx-auto mb-20">
          {/* Root Node */}
          <div className="flex justify-center mb-8">
            <TreeNode delay={0}>
              Asteroid Impact Simulation
            </TreeNode>
          </div>

          <div className="flex justify-center mb-4">
            <TreeConnection />
          </div>

          {/* Main Branches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <TreeNode delay={200}>
                Immediate Effects
              </TreeNode>
              
              <TreeConnection className="mx-auto my-4" />
              
              {/* Small Asteroid */}
              <div className="mb-6">
                <TreeNode 
                  isClickable 
                  onClick={() => handleNodeClick('small')}
                  delay={400}
                >
                  Small Asteroid
                </TreeNode>
              </div>

              {/* Medium Asteroid Branch */}
              <div className="space-y-4">
                <TreeNode delay={600}>
                  Medium Asteroid
                </TreeNode>
                <TreeConnection className="mx-auto" />
                
                <div className="flex gap-4 justify-center">
                  <TreeNode 
                    isClickable 
                    onClick={() => handleNodeClick('medium-ground')}
                    className="flex-1"
                    delay={800}
                  >
                    Medium Hitting Ground
                  </TreeNode>
                  <TreeNode 
                    isClickable 
                    onClick={() => handleNodeClick('medium-water')}
                    className="flex-1"
                    delay={1000}
                  >
                    Medium Hitting Water
                  </TreeNode>
                </div>
              </div>

              {/* Big Asteroid Branch */}
              <div className="mt-8 space-y-4">
                <TreeNode delay={1200}>
                  Big Asteroid
                </TreeNode>
                <TreeConnection className="mx-auto" />
                
                <div className="flex gap-4 justify-center">
                  <TreeNode 
                    isClickable 
                    onClick={() => handleNodeClick('big-forest')}
                    className="flex-1"
                    delay={1400}
                  >
                    Big Hitting Forest
                  </TreeNode>
                  <TreeNode 
                    isClickable 
                    onClick={() => handleNodeClick('big-water')}
                    className="flex-1"
                    delay={1600}
                  >
                    Big Hitting Water
                  </TreeNode>
                </div>
              </div>
            </div>

            <div className="text-center">
              <TreeNode delay={300}>
                Delayed Effects
              </TreeNode>
              
              <TreeConnection className="mx-auto my-4" />
              
              <div className="space-y-6">
                <TreeNode 
                  isClickable 
                  onClick={() => handleNodeClick('downstream')}
                  delay={1800}
                >
                  Downstream Effect
                </TreeNode>
                
                <TreeNode 
                  isClickable 
                  onClick={() => handleNodeClick('downwind')}
                  delay={2000}
                >
                  Downwind Effect
                </TreeNode>
              </div>
            </div>
          </div>
        </div>

        {/* Scenario Detail Area */}
        {selectedScenario && scenarios[selectedScenario] && (
          <div 
            ref={scenarioDetailRef}
            className="card-cosmic p-8 mb-12 animate-fade-in"
          >
            <div className="mb-8">
              {/* Scenario Title */}
              <h2 className="text-3xl font-bold text-center mb-6 text-primary">
                {scenarios[selectedScenario].title}
              </h2>
              
              {/* Description */}
              <p className="text-lg text-center mb-8 text-muted-foreground max-w-4xl mx-auto">
                {scenarios[selectedScenario].description}
              </p>
              
              {/* Infographic Keywords */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {scenarios[selectedScenario].infographics.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                  >
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Simulation Area */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column: Custom Impact Calculator */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  See Impacts in Your Home
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Want to see what would happen if an asteroid hit your location? 
                  Use our interactive calculator to select your home on the map and see detailed impact analysis.
                </p>

                <Button
                  onClick={() => navigate('/impact-calculator')}
                  size="lg"
                  className="w-full bg-gradient-to-r from-warning to-destructive hover:opacity-90 text-white font-bold py-6 text-lg"
                >
                  🏠 Click here to see impacts in your home
                </Button>

                <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-semibold mb-2 text-sm">You'll be able to:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Select any location on Earth</li>
                    <li>• Customize asteroid parameters</li>
                    <li>• View detailed impact analysis</li>
                    <li>• See tsunami and damage predictions</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Video Simulation */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Simulation Visualization
                </h3>
                
                <div className="relative rounded-lg overflow-hidden bg-black/20">
                  <video
                    key={scenarios[selectedScenario].videoUrl}
                    controls
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto max-h-80 object-cover"
                  >
                    <source src={scenarios[selectedScenario].videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay with Dynamic Parameters */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {scenarios[selectedScenario].sliders.slice(0, 2).map((slider, index) => (
                        <div key={index} className="text-white">
                          <span className="text-primary">{slider.name}:</span> {sliderValues[slider.name] || slider.default}{slider.unit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Continue to Act 3 */}
        <div className="text-center">
          <Button 
            variant="success" 
            size="lg" 
            onClick={onContinue}
            className="glow-primary"
          >
            Want to save the world? →
          </Button>
        </div>
      </div>
    </section>
  );
}