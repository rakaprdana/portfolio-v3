import Image from "next/image";
import PhotoProfile from "../../../../../public/image/no-bg.png";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import ContactMe from "..";
const ContactProfileSection = () => {
  const data = [
    {
      href: "https://www.linkedin.com/in/rakaprdana/",
      icon: <LinkedIn sx={{ fontSize: 32 }} />,
      username: "rakaprdana",
    },
    {
      href: "https://github.com/rakaprdana",
      icon: <GitHub sx={{ fontSize: 32 }} />,
      username: "rakaprdana",
    },
    {
      href: "https://www.instagram.com/",
      icon: <Instagram sx={{ fontSize: 32 }} />,
      username: "rakaprdana_",
    },
  ];
  return (
    <div className="bg-slate-700 w-[85%] p-4 rounded-lg md:flex items-center">
      <div className="md:ml-16 text-left">
        <Image
          src={PhotoProfile}
          alt={"me"}
          className="border-2 border-gray-400 w-1/2 md:w-1/4 rounded-full mb-4"
        />
        <h1 className="text-xl md:text-4xl font-bold">
          Raka Pradana Martianus
        </h1>
        <div className="flex gap-2 items-center mb-4">
          <p className="text-[8px] md:text-lg italic">
            Full stack software Developer
          </p>
          <hr className="border-2 border-slate-50 w-36 md:w-52 rounded-full" />
        </div>
        {data.map((item, index) => (
          <div key={index} className="mb-2">
            <a
              href={item.href}
              className="flex items-center gap-4 hover:text-cyan-300 transition duration-300"
            >
              {item.icon}
              <p className="">{item.username}</p>
            </a>
          </div>
        ))}
      </div>
      <ContactMe />
    </div>
  );
};

export default ContactProfileSection;
