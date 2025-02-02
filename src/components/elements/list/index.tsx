interface ListProps {
  number: string;
  job: string;
  location: string;
  time: string;
  description: string;
}

const List = ({ number, job, location, time, description }: ListProps) => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-between items-center mt-4 mx-6 md:mx-28 space-y-6 md:space-y-0">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-[7rem] h-[7rem] p-6 rounded-full flex justify-center items-center text-white text-5xl font-extrabold shadow-lg transform transition duration-300 hover:scale-110 hover:rotate-6">
        {number}
      </div>

      <hr className="hidden md:block border-dashed border-l-4 border-white py-36" />

      <div className="bg-slate-800 w-full p-6 md:w-1/2 space-y-4 rounded-lg text-center md:text-left shadow-lg shadow-gray-800">
        <h1 className="font-extrabold text-3xl tracking-tight hover:text-cyan-400 transition duration-300">
          {job}
        </h1>
        <p className="font-light italic">
          {location} <span className="font-medium">{time}</span>
        </p>
        <hr className="border-2 border-blue-500 rounded-lg my-2" />
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default List;
