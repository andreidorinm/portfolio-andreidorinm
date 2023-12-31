import React, { useRef, RefObject } from 'react';
import Image from 'next/image';
import educationData from '../../lib/data/educationData';
import useRevealAnimation from '../../lib/hooks/useRevealAnimation';

const Education = () => {
  const educationRefs: RefObject<HTMLDivElement>[] = useRef(educationData.map(() => React.createRef<HTMLDivElement>())).current;
  const { ref } = useRevealAnimation();

  return (
    <div ref={ref} className="my-16 px-3 font-sen text-white hidden-component" id="education">
      <h3 className="text-2xl sm:text-3xl font-bold text-white">Education</h3>

      {educationData.map((edu, index) => (
        <div key={index} ref={educationRefs[index]} className="text-md my-8 flex flex-col font-medium md:text-xl sm:text-lg">
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex items-center mr-4 mt-2">
              <Image loading='lazy' src={edu.logoUrl} alt={`${edu.institution} Logo`} width={40} height={40} />
            </div>
            
            <div className="flex-1">
              <h4 className="text-lg sm:text-xl text-white">
                {edu.degree} @ {edu.institution}
              </h4>
              <p className="text-sm italic text-slate-400">Faculty of Economic Cybernetics, Statistics and Economic Informatics</p>
              <span className="text-sm italic text-slate-400">{edu.dateRange}</span>
              <ul className="list-disc ml-4 sm:ml-6 md:ml-12 mt-2 text-slate-300">
                {edu.description.map((detail, detailIndex) => (
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

export default Education;
