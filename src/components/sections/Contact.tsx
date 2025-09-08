import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export function Contact() {
  const contactInfo = [
    {
      label: "Email",
      value: "hello@designer.com",
      href: "mailto:hello@designer.com"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/designer",
      href: "https://linkedin.com/in/designer"
    },
    {
      label: "Dribbble",
      value: "dribbble.com/designer",
      href: "https://dribbble.com/designer"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <GlassCard className="p-8 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <div key={contact.label} className="flex flex-col space-y-2">
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                      {contact.label}
                    </span>
                    <a 
                      href={contact.href}
                      className="text-foreground hover:text-red transition-colors text-lg"
                    >
                      {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-muted-foreground">
                Currently available for freelance projects and full-time opportunities.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red/50 focus:ring-1 focus:ring-red/20 text-foreground placeholder-muted-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red/50 focus:ring-1 focus:ring-red/20 text-foreground placeholder-muted-foreground transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red/50 focus:ring-1 focus:ring-red/20 text-foreground placeholder-muted-foreground resize-none transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <Button 
                type="button"
                className="w-full bg-gradient-red hover:bg-red/80 border border-red/30 backdrop-blur-sm text-white shadow-lg hover:shadow-red/20"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}