import { useEffect } from "react";
import { BsArrowRightShort } from "../Misc/Icons.collection";
import useRevealAnimation from "../../lib/hooks/useRevealAnimation";

const Skills = () => {
  const { ref, setupAnimation } = useRevealAnimation();

  useEffect(() => {
    setupAnimation();
  }, [setupAnimation]);

  return (
    <div ref={ref} className="my-8 sm:my-12 md:my-16 px-3 font-sen text-white" id="skills">
      <p className="text-2xl sm:text-3xl font-bold">Skills & Uses</p>

      <div className="my-8 flex flex-col font-medium text-md md:text-lg lg:text-xl">
        {[
          { skill: "Angular 14", description: "for robust Frontend development" },
          { skill: "RxJS", description: "for reactive programming in Angular" },
          { skill: "Webpack", description: "for module federation and micro frontends" },
          { skill: "AWS", description: "for cloud-based solutions and services" },
          { skill: "SCSS", description: "for advanced styling solutions" },
        ].map(({ skill, description }, index) => (
          <div key={index} className="flex items-start sm:items-center border-b-[0.1px] border-gray-500 py-1">
            <div className="flex items-center justify-center mr-2">
              <BsArrowRightShort size="30" />
            </div>
            <div>
              <span className="text-white">{skill} </span>
              <span className="text-slate-300">&nbsp;{description}</span>
            </div>
          </div>
        ))}

        <p className="text-lg font-medium text-slate-300">
          ...more skills include <span className="text-white">TypeScript</span>,{" "}
          <span className="text-white">NextJS</span>,{" "}
          <span className="text-white">Tailwind CSS</span>,{" "}
          <span className="text-white">Bootstrap</span>,{" "}
          <span className="text-white">Express JS</span>
        </p>
      </div>
    </div>
  );
};

export default Skills;
