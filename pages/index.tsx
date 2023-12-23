import { lazy, useRef } from 'react';
import type { NextPage } from 'next';
import { Suspense } from 'react';
import { Header } from '../components';
import useDynamicScrollbar from '../lib/hooks/useDynamicScrollbar';

// Lazy load components
const About = lazy(() => import('../components/Sections/About.section'));
const Skills = lazy(() => import('../components/Sections/Skills.section'));
const Experience = lazy(() => import('../components/Sections/Experience.section'));
const Education = lazy(() => import('../components/Sections/Education.section'));
const Projects = lazy(() => import('../components/Sections/Projects.section'));
const Contact = lazy(() => import('../components/Sections/Contact.section'));
const NowPlaying = lazy(() => import('../components/Misc/NowPlaying.misc'));

const Home: NextPage = () => {
  const scrollContainerRef = useRef(null);

  useDynamicScrollbar(scrollContainerRef);

  return (
 <div ref={scrollContainerRef} className="smooth-scroll-container" style={{ height: '100vh' }}>
      <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
        <Header />
        <Suspense fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>}>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <div className="flex justify-center">
            <NowPlaying />
          </div>
        </Suspense>
      </div>
    </div>
  );
};


export default Home;
