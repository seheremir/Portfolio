import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../components/technologies"; // technologies.js dosyasını import ettik

const Tech = () => {
  return (
    <div className="text-center py-10">
      {/* Başlık */}
      <h3 className="text-3xl font-semibold mb-8 text-white">
        Technologies I Use 
      </h3>
      
      {/* Teknolojiler Yuvarlakları */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mb-12">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 rounded-full overflow-hidden flex flex-col items-center justify-center border-2 border-white" // Yuvarlak şekil için
            key={technology.name}
            style={{
              backgroundColor: "#2d2d2d", // Yuvarlakların arkaplan rengini ekliyoruz
            }}
          >
            {/* Logo */}
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 object-contain mb-2" // Logo boyutunu ayarlıyoruz
            />
            {/* Teknoloji adı */}
            <span className="text-white text-sm">{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
