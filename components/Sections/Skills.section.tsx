import { useEffect } from "react";
import { BsArrowRightShort } from "../Misc/Icons.collection";
import useRevealAnimation from "../../lib/useRevealAnimation";

const Skills = () => {
  const { ref, setupAnimation } = useRevealAnimation();

  useEffect(() => {
    setupAnimation();
  }, [setupAnimation]);

  return (
    <div ref={ref} className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Angular 14 </span>
          &nbsp;for robust Frontend development
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">RxJS </span>
          &nbsp;for reactive programming in Angular
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Webpack </span>
          &nbsp;for module federation and micro frontends
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">AWS </span>
          &nbsp;for cloud-based solutions and services
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">SCSS </span>
          &nbsp;for advanced styling solutions
        </p>

        {/* Additional skills based on your CV */}
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
