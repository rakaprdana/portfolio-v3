import CardSkills from "../elements/cards/skills";
import NextApp from "../../../public/image/icons/icons8-nextjs.svg";
import ReactApp from "../../../public/image/icons/icons8-react-js.svg";
import ExpreesJS from "../../../public/image/icons/icons8-express-js.svg";
import MongoDB from "../../../public/image/icons/icon-MongoDB.svg";
const SkillSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="flex flex-col items-center space-y-8 my-16">
      <div className="w-1/2 flex gap-4 items-center">
        <hr className="flex-grow border-2 border-gray-100 rounded-s-lg" />
        <h1 className="border border-slate-800 px-8 py-2 bg-slate-50 rounded-3xl text-3xl font-bold text-slate-800">
          My Skills
        </h1>
        <hr className="flex-grow border-2 border-gray-100 rounded-e-lg" />
      </div>
      <div className="flex space-x-8 py-4">
        <CardSkills image={NextApp} />
        <CardSkills image={ReactApp} />
        <CardSkills image={ExpreesJS} />
        <CardSkills image={MongoDB} />
      </div>
    </section>
  );
};

export default SkillSection;
