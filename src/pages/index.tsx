import React, { useState } from "react";

import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";
import Sidebar from "@/components/sidebar/Sidebar";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Expertise from "@/components/expertise/Expertise";
import Testimonial from "@/components/testimonial/Testimonial";
import Experiences from "@/components/experiences/Experiences";

const MyPortfolio = () => {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>

      <Navbar
        homeClick={() => scrollToSection("home")}
        aboutClick={() => scrollToSection("about")}
        servicesClick={() => scrollToSection("services")}
        experiencesClick={() => scrollToSection("experiences")}
        testimonialClick={() => scrollToSection("testimonial")}
        skillsClick={() => scrollToSection("skills")}
        contactClick={() => scrollToSection("contact")}
        sidebarOpenClick={() => setIsSidebarOpen(true)}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        homeClick={() => { scrollToSection("home"); setIsSidebarOpen(false); }}
        aboutClick={() => { scrollToSection("about"); setIsSidebarOpen(false); }}
        servicesClick={() => { scrollToSection("services"); setIsSidebarOpen(false); }}
        experiencesClick={() => { scrollToSection("experiences"); setIsSidebarOpen(false); }}
        testimonialClick={() => { scrollToSection("testimonial"); setIsSidebarOpen(false); }}
        skillsClick={() => { scrollToSection("skills"); setIsSidebarOpen(false); }}
        contactClick={() => { scrollToSection("contact"); setIsSidebarOpen(false); }}
      />

      <div className="space-y-20 max-[1000px]:space-y-12 max-[450px]:space-y-8">
        <div id="home" className="scroll-mt-[100px]">
          <Home
            portfolioClick={() => scrollToSection("portfolio")}
            contactClick={() => scrollToSection("contact")}
          />
        </div>
        <div id="about" className="scroll-mt-[100px]">
          <About />
        </div>
        <div id="services" className="scroll-mt-[100px]">
          <Services />
        </div>
        <div id="experiences" className="scroll-mt-[100px]">
          <Experiences />
        </div>
        <div id="portfolio" className="scroll-mt-[100px]">
          <Portfolio />
        </div>
        <div id="testimonial" className="scroll-mt-[100px]">
          <Testimonial />
        </div>
        <div id="skills" className="scroll-mt-[100px]">
          <Expertise
            contactClick={() => scrollToSection("contact")}
          />
        </div>
        <div id="contact" className="scroll-mt-[100px]">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;