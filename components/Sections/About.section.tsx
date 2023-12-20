import type { NextComponentType } from "next";

import Image from "next/image";
import useRevealAnimation from "../../lib/useRevealAnimation";
import { useEffect } from "react";


const About: NextComponentType = () => {
  const { ref, setupAnimation } = useRevealAnimation();

  useEffect(() => {
    setupAnimation();
  }, [setupAnimation]);
  
  return (
    <div ref={ref} className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Andrei Mihaila</p>
        <p className="mt-1 text-lg text-gray-300">
          Frontend Developer | BCR
        </p>

        <p className="mt-4 text-gray-400">
          Frontend Developer at BCR, adept in creating efficient, user-centric web applications. <br></br> Passionate about learning and sharing tech insights.
        </p>
      </div>
      <div className="hidden custom:block">
        <Image
          src="/assests/avatar.jpeg"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
