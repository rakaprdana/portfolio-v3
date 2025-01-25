"use client";
import { useEffect, useState } from "react";
import Button from "../button";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const elementA = [
    { title: "Skills", onClick: () => handleClick("skills") },
    { title: "Certificate", onClick: () => handleClick("certificate") },
    { title: "Project", onClick: () => handleClick("project") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (section: string) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      const offset = 130; // Jarak dari atas dalam piksel
      const elementPosition =
        targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleDownload = () => {
    // File path relatif ke folder `public`
    const fileUrl = "/files/RakaPradana-CV.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "RakaPradana-CV.pdf";
    link.click();
  };
  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-[98%] flex justify-between items-center md:ml-3 ml-1 p-4 mt-4 transition-all duration-700 ${
        scrolled
          ? "border border-slate-400 bg-gray-900 md:ml-3 ml-1 rounded-full"
          : "border border-transparent bg-transparent duration-1000"
      }`}
    >
      <h1 className="font-bold text-2xl ml-8">Portfolio</h1>
      <div className="hidden md:flex items-center space-x-8">
        {elementA.map((item, index) => (
          <div key={index}>
            <a
              onClick={item.onClick}
              className="cursor-pointer font-medium hover:text-cyan-400 active:text-cyan-600 transition-all duration-300"
            >
              {item.title}
            </a>
          </div>
        ))}
        <Button
          onClick={handleDownload}
          bgColor="bg-transparent"
          textColor="slate-50"
          label="Download CV"
        />
      </div>
      <button
        className=" p-2 md:hidden text-white rounded-xl duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon sx={{ fontSize: 30 }} />
      </button>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white flex flex-col items-center space-y-6 py-8 md:hidden transition-all duration-500 ${
          menuOpen ? "-translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setMenuOpen(false)} // Menutup sidebar
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </button>
        {elementA.map((item, index) => (
          <div key={index}>
            <a
              onClick={item.onClick}
              className="cursor-pointer font-medium hover:scale-125 active:scale-90 transition-all duration-300"
            >
              {item.title}
            </a>
          </div>
        ))}
        <Button
          onClick={handleDownload}
          bgColor="bg-transparent"
          textColor="slate-50"
          label="Download CV"
        />
      </div>
    </nav>
  );
};

export default Navbar;
