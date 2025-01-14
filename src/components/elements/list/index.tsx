const List = ({
  number,
  job,
  location,
  time,
  description,
}: {
  number: string;
  job: string;
  location: string;
  time: string;
  description: string;
}) => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-between items-center mx-6 md:mx-28 space-y-6 md:space-y-0">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-[7rem] h-[7rem] p-6 rounded-full flex justify-center items-center text-white text-5xl font-extrabold shadow-lg transform transition duration-300 hover:scale-110  hover:rotate-6">
        {number}
      </div>
      <hr className="border-dashed border-l-4 border-white py-36" />
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h1
          className="font-extrabold text-3xl tracking-tight hover:text-cyan-400 transition duration-300"
          style={{
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)", // Tambahkan efek bayangan teks
          }}
        >
          {job}
        </h1>
        <p className="font-light italic">
          {location} <span className="font-medium">{time}</span>
        </p>
        <hr className="border-2 border-blue-500 rounded-lg my-2" />
        <p className="leading-relaxed ">{description}</p>
      </div>
    </div>
  );
};

export default List;
