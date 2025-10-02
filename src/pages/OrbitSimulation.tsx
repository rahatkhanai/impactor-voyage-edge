import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OrbitSimulation() {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Add fullscreen message listener
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "goFullscreen" && iframeRef.current) {
        iframeRef.current.requestFullscreen?.();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      {/* Back Button */}
      <Button
        onClick={() => navigate("/")}
        variant="default"
        className="fixed top-6 left-6 z-50 gap-2 bg-primary/90 backdrop-blur-sm hover:bg-primary"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Main
      </Button>

      {/* Embedded 3D Solar System */}
      <iframe
        ref={iframeRef}
        src="/meteor-watch/index.html"
        className="w-full h-full border-0"
        title="3D Solar System Orbit Simulation"
        allow="fullscreen"
      />
    </div>
  );
}
