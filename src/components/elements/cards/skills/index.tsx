import Image, { StaticImageData } from "next/image";

const CardSkills = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="bg-slate-800 rounded-xl flex items-center justify-center transition hover:bg-slate-50 duration-300">
      <Image src={image} alt="skill" className="w-2/3" />
    </div>
  );
};

export default CardSkills;
