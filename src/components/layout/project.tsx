"use client";
import { ProjectListData } from "@/data/project-data";
import Image from "next/image";
import { useState } from "react";

const ProjectSection = ({ id }: { id: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const projectList = ProjectListData;
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

      {projectList.map((item, index) => (
        <li
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
              loading="lazy"
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
                <p className="text-sm my-4 text-gray-600 leading-relaxed">
                  {item.descriptions}
                </p>
                <a
                  href={item.link}
                  className="text-sm mt-4 text-blue-600 leading-relaxed font-bold"
                >
                  {item.link}
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </section>
  );
};

export default ProjectSection;
