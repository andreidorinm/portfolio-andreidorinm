import React, { useEffect, useRef, RefObject, useLayoutEffect } from 'react';
import ProgressBar from '../Misc/ProgressBar.misc';
import Image from 'next/image';
import { gsap } from 'gsap';
import useRevealAnimation from '../../lib/useRevealAnimation';

const Experience = () => {
  const experiencesData = [
    {
      role: 'Frontend Developer',
      company: 'BCR',
      description: [
        'Dedicated Angular Expert: Specializing in Angular for high-quality frontend solutions since July 2022, enhancing the My Advisory Platform (MAP) used across all Romanian branches.',
        'Advanced Angular Techniques and Robust Development: Employing Angular 14 best practices, Karma testing, and RxJS for robust and maintainable application development.',
        'Innovative Strategies and Custom Design: Integrates innovative techniques like micro frontends and module federation for scalable MAP applications. Skilled in crafting custom components and user-friendly interfaces with SCSS and Bootstrap.',
        'Client-Based Architecture for Enhanced Deployment: Pioneered client-based architecture in MAP, streamlining deployment processes, facilitating easier updates and maintenance, ensuring scalability and robust performance.'
      ],
      dateRange: 'July 2022 - Present',
      location: 'Bucharest, Romania',
      logoUrl: 'https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/325137668_1327204991378542_2288095938277077163_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=0-0FbD6ybs4AX-4hqk2&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAh0C2wicMyZeOOHzautwrTdRQxpuTNbZgVySImrRfmvg&oe=658644F4',
      technologies: [
        'https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png',
        'https://seeklogo.com/images/R/rxjs-logo-1C13E67498-seeklogo.com.png',
        'https://seeklogo.com/images/K/karma-logo-B204C2D2E3-seeklogo.com.png',
        'https://seeklogo.com/images/S/sass-logo-E41E7734A8-seeklogo.com.png',
        'https://seeklogo.com/images/W/webpack-logo-9E66EE203A-seeklogo.com.png',
        'https://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png'
      ]

    },
    {
      role: 'Intern',
      company: 'BCR',
      description: [
        'Internship description here...'
      ],
      dateRange: 'April 2022 - July 2022',
      location: 'Bucharest, Romania',
      logoUrl: '/path/to/bcr-logo.png',
      technologies: []
    },
  ];

  const experienceRefs: RefObject<HTMLDivElement>[] = useRef(experiencesData.map(() => React.createRef<HTMLDivElement>())).current;
  const headerRefs = useRef(experiencesData.map(() => React.createRef<HTMLHeadingElement>()));
  const revealRef = useRevealAnimation();
  
  return (
    <div ref={revealRef} className="my-16 px-3 font-sen text-white" id="experience">
      <h3 className="text-3xl font-bold text-white">Experience & Education</h3>

      {experiencesData.map((experience, index) => (
        <div key={index} ref={experienceRefs[index]} className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
          <div className="flex flex-col md:flex-row items-start">
          <ProgressBar 
            index={index} 
            total={experiencesData.length} 
            headerRefs={headerRefs.current}
          />

            <div className="flex-1 ml-10">
              <div className="flex flex-col md:flex-row items-center justify-between py-1">
                <div className="flex items-center text-slate-300 gap-2">
                  <Image src={experience.logoUrl} alt={`${experience.company} Logo`} width={40} height={40} className="mb-4" />
                  <h4 ref={headerRefs.current[index]} className="text-xl text-white mr-4">{experience.role} @ {experience.company}</h4>
                  <div className="flex items-center gap-3">
                    {experience.technologies.map((techLogoUrl, techIndex) => (
                      <Image key={techIndex} src={techLogoUrl} alt="Tech Logo" width={25} height={25} className="inline ml-4" />
                    ))}

                  </div>
                </div>
                <span className="text-sm italic text-slate-400">{experience.dateRange}</span>
              </div>

              <ul className="list-disc ml-12 text-slate-300">
                {experience.description.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <p className="text-lg font-medium text-slate-300">
        Additional experiences and education include...
      </p>
    </div>
  );
};

export default Experience;
