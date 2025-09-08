import { GlassCard } from "@/components/ui/glass-card";

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "Complete mobile shopping experience with intuitive navigation and seamless checkout flow.",
      category: "Mobile Design",
      year: "2024"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for a fintech startup with complex data visualization and user management.",
      category: "Web Design",
      year: "2024"
    },
    {
      title: "Healthcare Platform",
      description: "Patient portal redesign focusing on accessibility and user-friendly medical information display.",
      category: "UX Research",
      year: "2023"
    },
    {
      title: "Design System",
      description: "Comprehensive design system for a multi-product technology company with 50+ components.",
      category: "Design Systems",
      year: "2023"
    },
    {
      title: "Banking App Redesign",
      description: "Complete overhaul of a mobile banking app focusing on security and ease of use.",
      category: "Mobile Design",
      year: "2023"
    },
    {
      title: "Event Management Tool",
      description: "Web application for event organizers with booking, management, and analytics features.",
      category: "Web Design",
      year: "2022"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my recent projects showcasing user-centered design solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard 
              key={project.title}
              variant="hover"
              className="p-6 space-y-4 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start">
                <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-white/5">
                  {project.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="pt-4">
                <div className="text-sm text-white/60 group-hover:text-white transition-colors">
                  View Case Study →
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}