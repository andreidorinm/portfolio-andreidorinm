import React, { useRef, RefObject } from 'react';
import ProgressBar from '../Misc/ProgressBar.misc';
import Image from 'next/image';
import useRevealAnimation from '../../lib/hooks/useRevealAnimation';
import experiencesData from '../../lib/data/experiencesData';

const Experience = () => {
  const experienceRefs: RefObject<HTMLDivElement>[] = useRef(experiencesData.map(() => React.createRef<HTMLDivElement>())).current;
  const headerRefs = useRef(experiencesData.map(() => React.createRef<HTMLHeadingElement>()));
  const { ref } = useRevealAnimation();

  return (
    <div ref={ref} className="my-8 sm:my-12 md:my-16 px-3 font-sen text-white hidden-component" id="experience">
      <h3 className="text-2xl sm:text-3xl font-bold text-white">Experience</h3>

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
                  <div className={`flex items-center justify-center flex-shrink-0 mr-2 ${experience.company === 'Allianz' ? 'w-20 h-20' : ''}`} style={experience.company === 'Allianz' ? { marginLeft: '-16px' } : { width: '52px', height: '52px' }}>
                    <Image src={experience.logoUrl} alt={`${experience.company} Logo`} width={experience.company === 'Allianz' ? 80 : 52} height={experience.company === 'Allianz' ? 80 : 52} className="object-contain w-full h-full" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center min-w-0">
                    <h4 ref={headerRefs.current[index]} className="text-lg sm:text-xl text-white mr-2" style={experience.company === 'Allianz' ? { marginLeft: '-12px' } : {}}>{experience.role} @ {experience.company}</h4>
                    <div className="flex items-center gap-3 hidden md:flex ml-4 flex-wrap max-w-xs">
                      {experience.technologies.slice(0, 5).map((techLogoUrl, techIndex) => (
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
