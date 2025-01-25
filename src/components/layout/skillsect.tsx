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
    <section
      id={id}
      className="flex flex-col items-center space-y-12 my-16 px-4 md:px-8"
    >
      <div className="w-full md:w-2/3 lg:w-1/2 flex items-center gap-4">
        <hr className="flex-grow border-2 border-gray-100 rounded-lg" />
        <h1 className="border border-slate-800 px-6 py-2 bg-slate-50 rounded-3xl text-xl md:text-3xl font-bold text-slate-800">
          My Skills
        </h1>
        <hr className="flex-grow border-2 border-gray-100 rounded-lg" />
      </div>
      <h2 className="text-lg md:text-xl text-center">Tools For Programming</h2>
      <div className="grid grid-cols-5 items-center md:flex justify-center gap-6 py-4 w-full md:w-3/4">
        <CardSkills image={NextApp} />
        <CardSkills image={ReactApp} />
        <CardSkills image={TailwindCSS} />
        <CardSkills image={ExpreesJS} />
        <CardSkills image={MongoDB} />
      </div>
      <div className="bg-slate-800 bg-opacity-30 flex flex-wrap justify-center md:justify-between w-full md:w-2/3 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
        {skillsData.map((data, index) => (
          <SkillsList key={index} title={data.title} skills={data.skills} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
