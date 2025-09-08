import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import designerPortrait from "@/assets/designer-portrait.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-glass-float" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-glass-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient leading-tight">
                UI/UX Designer
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground max-w-xl">
                Crafting digital experiences that blend aesthetic beauty with functional excellence
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <GlassCard className="p-1 hover:scale-105 transition-transform duration-500">
              <div className="relative">
                <img 
                  src={designerPortrait}
                  alt="Professional designer portrait"
                  className="w-80 h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}