import { Button } from "@/components/ui/button";

interface ScenarioCardProps {
  title: string;
  description: string;
  severity: "low" | "medium" | "high" | "extreme";
  impactType: string;
  estimatedDamage: string;
  image?: string;
  onSelect: () => void;
}

const severityConfig = {
  low: {
    color: "text-success",
    bgColor: "border-success/30 bg-success/10",
    glowClass: "hover:shadow-[0_0_30px_hsl(var(--success)/0.4)]"
  },
  medium: {
    color: "text-warning",
    bgColor: "border-warning/30 bg-warning/10",
    glowClass: "hover:shadow-[0_0_30px_hsl(var(--warning)/0.4)]"
  },
  high: {
    color: "text-destructive",
    bgColor: "border-destructive/30 bg-destructive/10",
    glowClass: "hover:shadow-[0_0_30px_hsl(var(--destructive)/0.4)]"
  },
  extreme: {
    color: "text-destructive",
    bgColor: "border-destructive/50 bg-destructive/20",
    glowClass: "hover:shadow-[0_0_40px_hsl(var(--destructive)/0.6)]"
  }
};

export default function ScenarioCard({
  title,
  description,
  severity,
  impactType,
  estimatedDamage,
  image,
  onSelect
}: ScenarioCardProps) {
  const config = severityConfig[severity];
  
  return (
    <div className={`scenario-card ${config.bgColor} ${config.glowClass} group`}>
      {/* Severity Indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className={`text-xs font-bold uppercase tracking-wider ${config.color}`}>
          {severity} threat
        </div>
        <div className="flex gap-1">
          {[...Array(severity === "extreme" ? 4 : severity === "high" ? 3 : severity === "medium" ? 2 : 1)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${config.color.replace('text-', 'bg-')}`} />
          ))}
        </div>
      </div>

      {/* Image Placeholder */}
      {image && (
        <div className="w-full h-32 rounded-lg bg-muted mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Impact Details */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Impact Type:</span>
            <span className="font-medium text-foreground">{impactType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Est. Damage:</span>
            <span className={`font-medium ${config.color}`}>{estimatedDamage}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          variant={severity === "extreme" ? "threat" : severity === "high" ? "destructive" : "glass"}
          className="w-full mt-6"
          onClick={onSelect}
        >
          Explore Scenario
        </Button>
      </div>
    </div>
  );
}