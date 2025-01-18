import List from "../elements/list";

const ExperienceSection = () => {
  return (
    <section>
      <h1 className="font-bold text-center text-4xl my-8">My Experience</h1>
      <div>
        <List
          number="1"
          job={"Fullstack Software Developer"}
          location="Productzilla Academy"
          time="Sept - Dec 2024"
          description={
            "Involved in creating and developing the backend division's official campus website with MySQL and PHP technology. Collaborate with the team to ensure the website meets requirements and quality standards"
          }
        />
        <List
          number="2"
          job={"Assistant Lecturer"}
          location="Krisnadwipayana University"
          time="Jan - July 2024"
          description={
            "Involved in creating and developing the backend division's official campus website with MySQL and PHP technology. Collaborate with the team to ensure the website meets requirements and quality standards"
          }
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
