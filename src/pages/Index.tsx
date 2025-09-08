import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark-red">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        {/* <div id="work">
          <Portfolio />
        </div>
         */}
        <div id="contact">
          <Contact />
        </div>
      </main>

    </div>
  );
};

export default Index;
