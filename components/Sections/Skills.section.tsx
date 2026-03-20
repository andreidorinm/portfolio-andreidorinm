import { BsArrowRightShort } from "../Misc/Icons.collection";
import useRevealAnimation from "../../lib/hooks/useRevealAnimation";

const Skills = () => {
  const { ref } = useRevealAnimation();

  return (
    <div ref={ref} className="my-8 sm:my-12 md:my-16 px-3 font-sen text-white hidden-component" id="skills">
      <p className="text-2xl sm:text-3xl font-bold">Skills & Uses</p>

      <div className="my-8 flex flex-col font-medium text-md md:text-lg lg:text-xl">
        {[
          { skill: "Spring Boot 3", description: "for enterprise microservices" },
          { skill: "Java 17", description: "for backend development" },
          { skill: "Angular 17", description: "for modern frontend development" },
          { skill: "PostgreSQL", description: "for data persistence" },
          { skill: "Docker & Kubernetes", description: "for container orchestration" },
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
          ...more skills include <span className="text-white">RxJS</span>,{" "}
          <span className="text-white">Jenkins</span>,{" "}
          <span className="text-white">Maven</span>,{" "}
          <span className="text-white">REST APIs</span>,{" "}
          <span className="text-white">Webpack</span>
        </p>
      </div>
    </div>
  );
};

export default Skills;
