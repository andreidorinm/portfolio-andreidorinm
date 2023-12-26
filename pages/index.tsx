import { lazy, useRef, useState } from 'react';
import type { NextPage } from 'next';
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
const ScrollToTopButton = lazy(() => import('../components/Misc/ScrollToTopButton.component'));


const Home: NextPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollContainerRef = useRef(null);

  useDynamicScrollbar(scrollContainerRef, setShowScrollButton);

  return (
 <div ref={scrollContainerRef} className="smooth-scroll-container">
      <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
        <Header />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <div className="flex justify-center">
            <NowPlaying />
          </div>
      </div>
      {showScrollButton && <ScrollToTopButton scrollContainerRef={scrollContainerRef} />}
    </div>
  );
};


export default Home;
