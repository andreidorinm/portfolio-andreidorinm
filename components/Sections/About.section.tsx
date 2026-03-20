import Image from "next/image";
import useRevealAnimation from "../../lib/hooks/useRevealAnimation";
import Link from "next/link";

const About = () => {
  const { ref } = useRevealAnimation();

  return (
    <div ref={ref} className="my-8 flex flex-col md:flex-row items-center justify-between px-3 font-sen hidden-component gap-3" id="home">
      <div className="md:order-1">
        <p className="text-3xl font-bold text-white">Andrei Mihaila</p>
        <p className="mt-1 text-lg text-gray-300">
          Full Stack Developer | Allianz
        </p>
        {/* Avatar Image for Mobile */}
        <div className="mb-4 mt-4 md:hidden w-32 h-32 bg-white rounded-full overflow-hidden">
          <Image
            src="/assets/avatar.jpeg"
            width={128}
            height={128}
            className="object-cover h-full"
            style={{ objectPosition: 'center 30%', color: 'transparent', marginLeft: '20px', width: '70%' }}
            alt="avatar"
            loading="lazy"
          />
        </div>
        <div className="mt-4 text-gray-400 md:mt-1">
          <p>
            Full Stack Developer at Allianz, building enterprise solutions with Spring Boot, Angular, and AI automations.
          </p>
          <p>
            Experienced with Claude Code and the entire development process from design to deployment.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:order-2">
        {/* Avatar Image for Desktop */}
        <div className="mb-4 hidden md:block w-32 h-32 bg-white rounded-full overflow-hidden">
          <Image
            src="/assets/avatar.jpeg"
            width={128}
            height={128}
            className="object-cover h-full"
            style={{ objectPosition: 'center 30%', color: 'transparent', marginLeft: '20px', width: '70%' }}
            alt="avatar"
            priority
          />
        </div>
        <Link
          href="/Andrei_Dorin_Mihaila_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-gray-300 text-sm font-medium text-gray-300 hover:border-gray-400 hover:text-gray-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 resume-button"
          style={{ borderRadius: '18px' }}
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default About;
