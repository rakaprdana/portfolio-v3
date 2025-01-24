"use client";

import { useState } from "react";

const CertificateSection = ({ id }: { id: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const data = [
    {
      name: "Productzilla Academy Certificate",
      role: "Fullstack Software Development",
      description:
        "I created a web application utilizing full-stack technologies, prioritizing enhanced user experience and optimal performance. Working collaboratively within a team, I played an active role in designing, developing, and testing innovative software solutions that addressed user requirements. I crafted responsive and intuitive interfaces using Figma, ensuring compatibility across various devices. By integrating frontend tools like React TypeScript (ReactTS) and TailwindCSS with backend frameworks such as Express, I developed high-performing and scalable web applications. Furthermore, I managed non-relational databases like MongoDB and implemented RESTful APIs to enable smooth communication between frontend and backend systems.",
    },
    {
      name: "Dicoding Academy Certificate",
      role: "React Development",
      description:
        "I acquired practical experience in building and developing a fully operational website using React. This process included mastering core React concepts like components, state management, and props, which I applied to design a dynamic and engaging user interface.",
    },
  ];
  return (
    <section id={id} className="bg-slate-800 rounded-lg shadow-lg mx-8 p-6">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-4xl font-extrabold text-slate-50">Certificate</h1>
        <hr className="flex-grow border-2 border-cyan-400 rounded-full" />
      </div>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className={`bg-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6 rounded-lg cursor-pointer border ${
              openIndex === index ? "border-cyan-500" : "border-gray-200"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
              <span
                className={`text-gray-500 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
              style={{ maxHeight: openIndex === index ? "10rem" : "0" }}
            >
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificateSection;
