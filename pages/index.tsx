import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import { gsap } from 'gsap';
import {
  Header,
  About,
  Projects,
  Skills,
  Contact,
  NowPlaying,
  Experience,
} from '../components';

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
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <div className="flex justify-center">
          <NowPlaying />
        </div>
      </div>
    </div>
  );
};

export default Home;
