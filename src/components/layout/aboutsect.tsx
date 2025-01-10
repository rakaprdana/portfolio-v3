import Image from "next/image";
import PhotoProfile from "../../../public/image/no-bg.png";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center py-12">
      <h1 className="text-4xl font-extrabold tracking-wide">About me</h1>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-x-8 px-8 mx-auto mt-12 max-w-6xl">
        <Image
          src={PhotoProfile}
          alt="me"
          className="w-1/4 rounded-full border-4 border-gray-700 shadow-lg transform transition duration-300 hover:scale-105"
        />
        <div className="text-left md:pl-12 space-y-6 pl-36">
          <h2 className="text-3xl md:text-4xl font-bold">
            Raka Pradana Martianus
          </h2>
          <hr className="border-t-2 border-gray-600 rounded-lg my-2" />
          <p className=" text-base md:text-lg leading-relaxed">
            An Informatics Engineering student who is effective in managing time
            and tasks by multitasking. Has a deep interest in technology and
            design and has developed skills in the field of Frontend or Backend
            Development. In addition, actively learn and apply the latest
            technology to create responsive and attractive user interfaces.
            Understanding that good design should be not only aesthetic but also
            functional, I focus on efficiency to provide an optimal user
            experience when using an application or website.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/rakaprdana/"
              className="text-blue-600 transform transition duration-300 hover:scale-110"
            >
              <LinkedIn sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://github.com/rakaprdana"
              className="text-gray-50 transform transitio duration-300 hover:scale-110"
            >
              <GitHub sx={{ fontSize: 40 }} />
            </a>
            <a
              href=""
              className="text-pink-600 transform transition duration-300 hover:scale-110"
            >
              <Instagram sx={{ fontSize: 40 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
