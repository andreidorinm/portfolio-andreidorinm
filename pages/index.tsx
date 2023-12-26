import { useRef, useState } from 'react';
import type { NextPage } from 'next';
import { About, Contact, Education, Experience, Header, NowPlaying, Projects, ScrollToTopButton, Skills } from '../components';
import useDynamicScrollbar from '../lib/hooks/useDynamicScrollbar';


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
