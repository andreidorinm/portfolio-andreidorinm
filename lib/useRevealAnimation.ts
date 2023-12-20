import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';


const useRevealAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
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
            start: "top 80%",
            toggleActions: "play none none none"
          },
          duration: 1
        }
      );
    }
  }
  loadGSAP()
  }, []);

  return ref;
};

export default useRevealAnimation;
