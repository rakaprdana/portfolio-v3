"use client";
import Image from "next/image";
import SeviGoLP from "../../../public/image/SeviGo-LP.png";
import MiniLibLP from "../../../public/image/MiniLib-LP.png";
import { useState } from "react";

const ProjectSection = ({ id }: { id: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const data = [
    {
      src: SeviGoLP,
      title: "SeviGo Website: A Solution for Complaint Reporting",
      alt: "Project",
      descriptions:
        "SeviGo is a website that my team and I developed to address issues related to complaint reporting. In several regions of Indonesia, there are still no services that facilitate the submission of complaints. To solve this problem, my team and I decided to create a platform that offers an easy-to-use solution. Here are the key features of SeviGo: Multi-platform Support: SeviGo is designed to be accessible on various devices, including laptops and smartphones, ensuring that users can access the website from any platform. Status Tracking: Users can track the progress of their submitted complaints. The status categories include Accepted, Processing, Finished, and Rejected.",
    },
    {
      src: MiniLibLP,
      title: "Mini Library UNKRIS: A Comprehensive Website for Journal Search",
      alt: "Project",
      descriptions:
        "MiniLib is an innovative website that my team and I developed to fulfill the specific needs of our academic program by simplifying the search for published student journals and internship reports. For the frontend, we employed React and TailwindCSS to create a responsive and intuitive user interface. On the backend, we utilized pure PHP to ensure robust and efficient server-side operations. This project involved meticulous planning and extensive collaboration to deliver a solution that meets high standards of performance, usability, and reliability. MiniLib significantly enhances the accessibility and discoverability of academic documents, representing a substantial contribution to our academic community.",
    },
  ];
  return (
    <section id={id} className="px-4 py-8 md:px-12 lg:px-16">
      <div className="my-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Project
        </h1>
        <p className="text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-16 ">
          Some of these are projects I have developed both individually and as
          part of a team. Each project utilizes different tools and programming
          languages.
        </p>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="bg-slate-800 bg-opacity-80 flex flex-col mx-auto mb-8 rounded-lg max-w-full md:max-w-4xl lg:max-w-5xl"
        >
          <div className="flex h-0 gap-1 p-4">
            <div className="rounded-full bg-red-500 p-2" />
            <div className="rounded-full bg-yellow-300 p-2" />
            <div className="rounded-full bg-green-500 p-2" />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-4 md:mx-6 lg:mx-8 pt-4 pb-8 rounded-2xl">
            <Image
              src={item.src}
              alt={item.alt}
              className="w-full h-60 md:w-[45%] lg:w-[40%] rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="flex-1 bg-gray-100 p-6 rounded-2xl">
              <p className="text-xl md:text-2xl font-semibold text-gray-800">
                {item.title}
              </p>
              <hr className="border-gray-300 w-full my-4" />

              <button
                onClick={() => toggleAccordion(index)}
                className="text-sm text-blue-500 hover:text-blue-700 active:scale-105 duration-300"
              >
                {activeIndex === index
                  ? "Hide description"
                  : "Show description"}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-y-auto md:overflow-hidden ${
                  activeIndex === index
                    ? "max-h-80 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm mt-4 text-gray-600 leading-relaxed">
                  {item.descriptions}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
