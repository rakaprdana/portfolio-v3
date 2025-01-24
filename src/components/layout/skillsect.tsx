import CardSkills from "../elements/cards/skills";
import NextApp from "../../../public/image/icons/icons8-nextjs.svg";
import ReactApp from "../../../public/image/icons/icons8-react-js.svg";
import TailwindCSS from "../../../public/image/icons/icons8-tailwind-css.svg";
import ExpreesJS from "../../../public/image/icons/icons8-express-js.svg";
import MongoDB from "../../../public/image/icons/icon-MongoDB.svg";
import SkillsList from "../elements/cards/skills/skill-list";
const SkillSection = ({ id }: { id: string }) => {
  const skillsData = [
    {
      title: "Hard Skills",
      skills: ["Typescript", "JavaScript", "CSS", "HTML"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Leadership",
        "Presenting Skills",
        "Brainstorm Facilitating",
      ],
    },
  ];
  return (
    <section id={id} className="flex flex-col items-center space-y-8 my-16">
      <div className="w-1/2 flex gap-4 items-center">
        <hr className="flex-grow border-2 border-gray-100 rounded-s-lg" />
        <h1 className="border border-slate-800 px-8 py-2 bg-slate-50 rounded-3xl text-3xl font-bold text-slate-800">
          My Skills
        </h1>
        <hr className="flex-grow border-2 border-gray-100 rounded-e-lg" />
      </div>
      <h2 className="text-xl">Tools For Programming</h2>
      <div className="flex space-x-8 py-4 w-3/4">
        <CardSkills image={NextApp} />
        <CardSkills image={ReactApp} />
        <CardSkills image={TailwindCSS} />
        <CardSkills image={ExpreesJS} />
        <CardSkills image={MongoDB} />
      </div>
      <div className="bg-slate-800 bg-opacity-30 flex justify-between w-2/3 rounded-lg hover:scale-105 transition duration-300">
        {skillsData.map((data, index) => (
          <SkillsList key={index} title={data.title} skills={data.skills} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
