import Navbar from "@/components/elements/navbar";
import AboutSection from "@/components/layout/aboutsect";
import ExperienceSection from "@/components/layout/expsect";
import HeroSection from "@/components/layout/herosect";
import ContactSection from "@/components/layout/contactsect";
import SkillSection from "@/components/layout/skillsect";
import CertificateSection from "@/components/layout/certificatesect";

export default function Home() {
  return (
    <div className="bg-gray-900 font-Poppins text-white">
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillSection id="skills" />
        <CertificateSection id="certificate" />
        <ContactSection id="contact" />
      </main>
    </div>
  );
}
