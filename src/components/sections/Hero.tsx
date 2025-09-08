import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import designerPortrait from "@/assets/unnamed.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red/5 via-transparent to-red/10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-red/15 rounded-full blur-3xl animate-glass-float" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-red/10 rounded-full blur-3xl animate-glass-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red/25 rounded-full blur-2xl animate-glass-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-red/8 rounded-full blur-3xl animate-glass-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient leading-tight">
                Yukkeshan Koneswaran
              </h1>
              <h2 className="text-xl lg:text-2xl text-gradient-red font-semibold">
                UX/UI Designer
              </h2>
              <div className="text-lg text-muted-foreground max-w-xl">
                Crafting digital experiences that blend aesthetic beauty with functional excellence
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="bg-gradient-red hover:bg-red/80 border border-red/30 backdrop-blur-sm text-white shadow-lg hover:shadow-red/20">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-red/10 hover:border-red/40 backdrop-blur-sm">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <GlassCard className="p-1 hover:scale-105 transition-transform duration-500 border border-red/30 shadow-lg shadow-red/10">
              <div className="relative">
                <img 
                  src={designerPortrait}
                  alt="Professional designer portrait"
                  className="w-80 h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red/20 via-red/5 to-transparent rounded-xl" />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}