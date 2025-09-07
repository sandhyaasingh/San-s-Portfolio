// src/components/Tech.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { skills } from "../constants";

const Tech = () => {
  return (
    <>
      {/* Centered Skills Heading */}
      <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>

      <div className="mt-10 flex flex-col gap-12 items-center">
        {skills.map((category, index) => (
          <div key={index} className="w-full text-center">
            {/* Subheading */}
            <h3 className="text-white text-[24px] font-bold mb-8">
              {category.category}
            </h3>

            {/* Icons Grid */}
            <div className="flex flex-wrap justify-center gap-10">
              {category.items.map((tech, idx) => (
                <div
                  key={idx}
                  className="w-28 h-28 flex justify-center items-center"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 object-contain"
                  />
                  {/* Name removed */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
