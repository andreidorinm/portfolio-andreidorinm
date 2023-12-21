import Image from "next/image";
import Link from "next/link";
import projectsData from '../../lib/data/projectsData';
import useRevealAnimation from "../../lib/useRevealAnimation";
import { useEffect } from "react";

let colorIndex = 0;
const colors = [
  '#D8B4FE', '#818CF8', '#FDE68A', '#FCA5A5', '#FECACA',
  '#A7F3D0', '#FDBAF9', '#BDE0FE', '#FED7AA', '#C7D2FE',
  '#FECDD3', '#A5B4FC', '#FEF3C7', '#F0ABFC', '#E0F2FE',
  '#FBCFE8', '#D9F99D', '#FEE2E2', '#EDE9FE', '#FDE047',
];

const getRandomColor = () => {
  const color = colors[colorIndex % colors.length];
  colorIndex++;
  return color;
};

const Projects = () => {
  const { ref, setupAnimation } = useRevealAnimation();

  useEffect(() => {
    setupAnimation();
  }, [setupAnimation]);

  return (
    <div ref={ref} className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        {projectsData.map((project, index) => {
          const randomColor = getRandomColor();
          const cardStyle = { border: `4px solid ${randomColor}`, animation: 'colorShift 2s infinite ease-in-out' };

          return (
            <Link key={index} href={project.url} passHref target="_blank" rel="noopener noreferrer">
              <div className="w-[14rem] h-[22rem] cursor-pointer card-flip">
                {/* Front Face */}
                <div className="card-front rounded-lg p-1 text-white" style={cardStyle}>
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
                    <p className="text-xl font-semibold">{project.title}</p>
                    <p>{project.tagline}</p>
                  </div>
                </div>
                {/* Back Face */}
                <div className="card-back rounded-lg p-1 text-white bg-primary backdrop-blur-sm shadow-lg flex flex-col justify-center items-center" style={cardStyle}>
                  {/* Icons */}
                  {[0, 1, 2, 3].map((pos) => (
                    <div key={pos} className={`absolute ${pos % 2 === 0 ? 'top-2' : 'bottom-2'} ${pos < 2 ? 'left-2' : 'right-2'}`}>
                      <Image src={project.technologies[pos]} alt="Tech Icon" width={35} height={35} />
                    </div>
                  ))}
                  <div className="project-description text-center text-white text-s m-2">
                    {project.detailedDescription}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}



export default Projects;
