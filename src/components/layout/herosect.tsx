import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import NextApp from "../../../public/icons8-nextjs.svg";
import Button from "../elements/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="px-8 py-40">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center">
          <AccountCircleIcon sx={{ fontSize: 80 }} />
          <CloseIcon sx={{ fontSize: 20 }} />
          <Image src={NextApp} alt={"Next App"} />
        </div>
        <h1 className="font-bold text-4xl">Raka Pradana Martianus</h1>
        <p>Fullstack Software Developer</p>
        <Button bgColor={"black"} label={"Contact me"} textColor={"white"} />
      </div>
    </section>
  );
};

export default HeroSection;
