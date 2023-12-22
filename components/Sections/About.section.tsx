import Image from "next/image";
import useRevealAnimation from "../../lib/useRevealAnimation";
import { useEffect } from "react";

const About = () => {
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
      <div className="flex flex-col items-center">
        <div className="mb-4 hidden custom:block">
          <Image
            src="/assests/avatar.jpeg"
            width="112"
            height="112"
            className="rounded-full"
            alt="avatar"
          />
        </div>
        <a
          href="/Andrei_Dorin_Mihaila_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-gray-300 text-sm font-medium text-gray-300 hover:border-gray-400 hover:text-gray-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 resume-button"
          style={{ borderRadius: '18px' }}  // Adjust the radius as needed
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
