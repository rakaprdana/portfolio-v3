import { CheckCircle } from "@mui/icons-material";

const SkillsList = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <section className="mx-8 p-8">
      <h1 className="text-3xl font-bold mb-8 border-b border-gray-300">
        {title}
      </h1>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <CheckCircle className="text-green-400" sx={{ fontSize: 30 }} />
            <p className="text-xl font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsList;
