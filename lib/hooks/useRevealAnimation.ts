import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const useRevealAnimation = () => {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const setupAnimation = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (ref.current) {
        gsap.fromTo(ref.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ref.current,
              scroller: ".smooth-scroll-container",
              start: "top bottom",
              toggleActions: "play none none none"
            },
            duration: 1,
            onComplete: () => setIsLoaded(true)
          }
        );
      }
    };

    setupAnimation();

    // Cleanup function
    return () => {
      if (ref.current) {
        gsap.killTweensOf(ref.current);
      }
    };
  }, []);

  return { ref, isLoaded };
};

export default useRevealAnimation;
