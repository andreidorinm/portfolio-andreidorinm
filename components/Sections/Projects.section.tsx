import React from 'react';
import Image from "next/image";
import Link from "next/link";
import projectsData from '../../lib/data/projectsData';

const getRandomColor = () => {
  const colors = ['#D8B4FE', '#818CF8', '#FDE68A', '#FCA5A5', '#FECACA']; 
  return colors[Math.floor(Math.random() * colors.length)];
};

const Projects = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
{projectsData.map((project, index) => {
  const randomColor = getRandomColor(); // Get a random color for each card
  return (
    <div key={index} className="w-[14rem] h-[22rem] cursor-pointer">
      <div className="card-flip">
        <div className="card-front rounded-lg p-1 text-white" style={{ background: `linear-gradient(to right, ${randomColor}, ${randomColor})`, animation: 'colorShift 2s infinite ease-in-out' }}>
          <Link href={project.url} passHref target="_blank" rel="noopener noreferrer">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">{project.title}</p>
              <p>{project.description}</p>
            </div>
          </Link>
        </div>
        <div className="card-back rounded-lg bg-primary p-1 text-white">
          <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover"/>
        </div>
      </div>
    </div>
  );
})}
      </div>
    </div>
  );
};

export default Projects;
