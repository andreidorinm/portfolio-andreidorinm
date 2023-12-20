import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef, lazy } from 'react';
import type { NextPage } from 'next';
import { gsap } from 'gsap';
import { Suspense } from 'react';
import { Header, NowPlaying } from '../components';

// Lazy load components
const About = lazy(() => import('../components/Sections/About.section'));
const Skills = lazy(() => import('../components/Sections/Skills.section'));
const Experience = lazy(() => import('../components/Sections/Experience.section'));
const Education = lazy(() => import('../components/Sections/Education.section'));
const Projects = lazy(() => import('../components/Sections/Projects.section'));
const Contact = lazy(() => import('../components/Sections/Contact.section'));

const Home: NextPage = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const scrollbar = Scrollbar.init(scrollContainerRef.current, {
      damping: 0.07,
      alwaysShowTracks: true,
    });

    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.scrollerProxy('.smooth-scroll-container', {
        scrollTop(value) {
          return arguments.length ? scrollbar.scrollTop = value : scrollbar.scrollTop;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: scrollContainerRef.current.style.transform ? "transform" : "fixed"
      });

      scrollbar.addListener(ScrollTrigger.update);
    });
  }, []);

  return (
    <div ref={scrollContainerRef} className="smooth-scroll-container" style={{ height: '100vh' }}>
      <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        </Suspense>
        <div className="flex justify-center">
          <NowPlaying />
        </div>
      </div>
    </div>
  );
};

export default Home;
