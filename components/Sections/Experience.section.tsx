import React, { useRef, RefObject, useEffect } from 'react';
import ProgressBar from '../Misc/ProgressBar.misc';
import Image from 'next/image';
import useRevealAnimation from '../../lib/useRevealAnimation';
import experiencesData from '../../lib/data/experiencesData';

const Experience = () => {
  const experienceRefs: RefObject<HTMLDivElement>[] = useRef(experiencesData.map(() => React.createRef<HTMLDivElement>())).current;
  const headerRefs = useRef(experiencesData.map(() => React.createRef<HTMLHeadingElement>()));
  const { ref, setupAnimation } = useRevealAnimation();

  useEffect(() => {
    setupAnimation();
  }, [setupAnimation]);

  return (
    <div ref={ref} className="my-8 sm:my-12 md:my-16 px-3 font-sen text-white" id="experience">
      <h3 className="text-2xl sm:text-3xl font-bold text-white">Experience & Education</h3>

      {experiencesData.map((experience, index) => (
        <div key={index} ref={experienceRefs[index]} className="my-4 sm:my-6 md:my-8 text-md md:text-lg lg:text-xl font-medium">
          <div className="flex flex-col md:flex-row items-start">
            <div className='hidden md:block'>
              <ProgressBar
                index={index}
                total={experiencesData.length}
                headerRefs={headerRefs.current}
              />
            </div>
            <div className="flex-1 mt-4 md:mt-0 md:ml-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center text-slate-300">
                  <Image src={experience.logoUrl} alt={`${experience.company} Logo`} width={40} height={40} className="mr-2" />
                  <div className="flex flex-col md:flex-row md:items-center">
                    <h4 ref={headerRefs.current[index]} className="text-lg sm:text-xl text-white mr-2">{experience.role} @ {experience.company}</h4>
                    <div className="flex items-center gap-3 hidden md:flex ml-4">
                      {experience.technologies.map((techLogoUrl, techIndex) => (
                        <Image key={techIndex} src={techLogoUrl} alt="Tech Logo" width={25} height={25} className="object-contain" />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm italic text-slate-400 ml-2 mt-2 mb-2 md:mt-0 md:mb-0">{experience.dateRange}</span>
              </div>

              <ul className="list-disc ml-4 sm:ml-6 md:ml-12 text-slate-300">
                {experience.description.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
