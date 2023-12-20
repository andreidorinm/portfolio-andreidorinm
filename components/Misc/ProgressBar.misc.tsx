import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProgressBar = ({ index, total, headerRefs }) => {
  const progressBarRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      setTimeout(() => {
        if (index < total - 1 && progressBarRef.current) {
          const nextHeaderRef = headerRefs[index + 1]; // Get the next header ref
          if (nextHeaderRef && nextHeaderRef.current) {
            const offset = 42; // Define your offset value here
            const currentPosition = circleRef.current.getBoundingClientRect().top + window.scrollY;
            const nextPosition = nextHeaderRef.current.getBoundingClientRect().top + window.scrollY;
            const height = nextPosition - currentPosition - offset; // Subtract the offset

            gsap.fromTo(progressBarRef.current, 
              { height: 0 }, 
              {
                height: `${height}px`, // Use the adjusted height
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: circleRef.current,
                  scroller: ".smooth-scroll-container",
                  start: "top center",
                  end: `+=${height}`,
                  scrub: 1,
                },
              }
            );
          }
        }
        if (circleRef.current) {
          gsap.to(circleRef.current, {
            backgroundColor: "#fff",
            ease: "none",
            scrollTrigger: {
              trigger: circleRef.current,
              scroller: ".smooth-scroll-container",
              start: "top center",
              end: "bottom center",
              scrub: true,
              toggleActions: "restart none none reverse",
            },
          });
        }
      }, 100); 
    };

    loadGSAP();
  }, [index, total, headerRefs]);

  return (
    <div style={{ position: 'relative', height: '100px', marginRight: '20px' }}>
      <div
        ref={circleRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderRadius: '50%', background: '#333', border: '3px solid #fff' }}
      />
      {index < total - 1 && (
        <div
          ref={progressBarRef}
          style={{ position: 'absolute', top: '27px', left: '9px', width: '2px', background: '#fff', borderRadius: '5px', height: '0%' }}
        />
      )}
    </div>
  );
};

export default ProgressBar;
