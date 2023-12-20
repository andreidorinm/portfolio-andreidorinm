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
    <div ref={ref} className="my-16 px-3 font-sen text-white" id="experience">
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
                  <Image src={experience.logoUrl} alt={`${experience.company} Logo`} width={40} height={40} className="" />
                  <h4 ref={headerRefs.current[index]} className="text-xl text-white mr-4">{experience.role} @ {experience.company}</h4>
                  <div className="flex items-center  bg-transparent">
                    {experience.technologies.map((techLogoUrl, techIndex) => (
                      <Image key={techIndex} src={techLogoUrl} alt="Tech Logo" width={25} height={25} className="inline ml-4 object-contain" />
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
    </div>
  );
};

export default Experience;
