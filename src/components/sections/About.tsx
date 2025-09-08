import { GlassCard } from "@/components/ui/glass-card";

export function About() {
  const skills = [
    "User Experience Design",
    "User Interface Design", 
    "Prototyping & Wireframing",
    "Design Systems",
    "User Research",
    "Interaction Design"
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient">
                About Me
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate UI/UX designer with over 5 years of experience creating 
                digital products that users love. My approach combines user-centered design 
                principles with modern aesthetics to deliver exceptional experiences.
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                What I Do
              </h3>
              <div className="text-muted-foreground leading-relaxed">
                I specialize in transforming complex problems into simple, beautiful, and 
                intuitive designs. From initial research and wireframing to final pixel-perfect 
                interfaces, I handle every aspect of the design process.
              </div>
            </div>
          </div>

          <GlassCard className="p-8 space-y-6" variant="hover">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Core Skills
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="flex items-center space-x-3 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-red/60 rounded-full group-hover:bg-red transition-colors" />
                  <span className="text-foreground group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}