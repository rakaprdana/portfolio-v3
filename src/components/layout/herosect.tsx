"use client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "../elements/button";

const HeroSection = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact") as HTMLElement;
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="px-8 py-40">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center">
          <AccountCircleIcon sx={{ fontSize: 80 }} />
        </div>
        <h1 className="font-bold text-center text-4xl">
          Raka Pradana Martianus
        </h1>
        <p>Fullstack Software Developer</p>
        <Button
          onClick={handleClick}
          bgColor={"black"}
          label={"Contact me"}
          textColor={"white"}
        />
      </div>
    </section>
  );
};

export default HeroSection;
