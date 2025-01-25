import Image from "next/image";
import PhotoProfile from "../../../public/image/me2-nobg.png";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center py-12">
      <h1 className="text-4xl font-extrabold tracking-wide">About me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-8 mx-auto mt-12 max-w-6xl">
        <Image
          src={PhotoProfile}
          alt="me"
          className="w-36 h-36 md:w-48 md:h-48 bg-slate-50 rounded-full border-4 border-gray-700 shadow-lg transform transition duration-300 hover:scale-110"
        />
        <div className="text-left md:pl-12 space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-4xl font-bold">
            Raka Pradana Martianus
          </h2>
          <hr className="border-t-2 border-gray-600 rounded-lg my-2" />
          <p className="text-sm md:text-lg leading-relaxed">
            An Informatics Engineering student who is effective in managing time
            and tasks by multitasking. Has a deep interest in technology and
            design and has developed skills in the field of Frontend or Backend
            Development. In addition, actively learn and apply the latest
            technology to create responsive and attractive user interfaces.
            Understanding that good design should be not only aesthetic but also
            functional, I focus on efficiency to provide an optimal user
            experience when using an application or website.
          </p>
          <div className="flex space-x-4 mt-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/rakaprdana/"
              className="text-blue-600 transform transition duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn sx={{ fontSize: 32 }} />
            </a>
            <a
              href="https://github.com/rakaprdana"
              className="text-gray-50 transform transition duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub sx={{ fontSize: 32 }} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-pink-600 transform transition duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram sx={{ fontSize: 32 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
