import ContactMe from "../elements/contact";

const ContactSection = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="bg-gradient-to-b from-gray-900 to-gray-700 flex flex-col items-center text-center"
    >
      <div className="my-12">
        <h1 className="text-6xl md:text-[11rem] font-extrabold text-center ">
          Contact Me
        </h1>
        <div className="flex items-center gap-4 mt-6">
          <hr className="flex-grow border-t-4 border-gray-300 rounded-s-lg" />
          <p className="italic text-xl md:text-2xl ">Let{"'"}s connect!</p>
          <hr className="flex-grow border-t-4 border-gray-300 rounded-e-lg" />
        </div>
      </div>
      <ContactMe />
    </section>
  );
};

export default ContactSection;
