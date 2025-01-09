import Image from "next/image";
import PhotoProfile from "../../../public/image/no-bg.png";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const AboutSection = () => {
  return (
    <section className="bg-gray-800 text-center pt-8">
      <h1 className="text-4xl font-bold">About me</h1>
      <div className="border-4 border-red-600 flex items-center justify-between space-x-8 px-8 mt-8">
        <Image
          src={PhotoProfile}
          alt="me"
          className="bg-gray-400  w-1/4 rounded-full"
        />
        <div className="border-4 border-purple-600 pl-36">
          <p className=" text-left text-lg">
            An Informatics Engineering student who is effective in managing time
            and tasks by multitasking. Has a deep interest in technology and
            design and has developed skills in the field of Frontend
            Development. In addition, actively learn and apply the latest
            technology to create responsive and attractive user interfaces.
            Understanding that good design should be not only aesthetic but also
            functional, I focus on efficiency to provide an optimal user
            experience when using an application or website.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/rakaprdana/">
              <LinkedIn sx={{ fontSize: 40 }} />
            </a>
            <a href="https://github.com/rakaprdana">
              <GitHub sx={{ fontSize: 40 }} />
            </a>
            <a href="">
              <Instagram sx={{ fontSize: 40 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
