import { useEffect } from 'react';

const useDynamicScrollbar = (scrollContainerRef) => {
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let hideScrollbarTimeout;

    // Function to gradually fade out the scrollbar
    const fadeOutScrollbar = (duration = 300) => {
      let start = null;

      const fade = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const opacity = Math.max(1 - progress / duration, 0); // Calculate opacity
        scrollContainer.style.setProperty('--scrollbar-thumb-bg', `rgba(160, 160, 160, ${opacity})`); // Apply fading effect

        if (progress < duration) {
          requestAnimationFrame(fade);
        }
      };

      requestAnimationFrame(fade);
    };

    const showScrollbar = () => {
      scrollContainer.classList.add('scrollbar-visible');
      scrollContainer.style.setProperty('--scrollbar-thumb-bg', 'rgba(160, 160, 160, 1)');
    };

    const hideScrollbar = () => {
      clearTimeout(hideScrollbarTimeout);
      hideScrollbarTimeout = setTimeout(() => fadeOutScrollbar(), 2000); // Start fade out after delay
    };

    scrollContainer.addEventListener('mouseover', showScrollbar);
    scrollContainer.addEventListener('mouseout', hideScrollbar);
    scrollContainer.addEventListener('scroll', showScrollbar);

    hideScrollbar();

    return () => {
      scrollContainer.removeEventListener('mouseover', showScrollbar);
      scrollContainer.removeEventListener('mouseout', hideScrollbar);
      scrollContainer.removeEventListener('scroll', showScrollbar);
      clearTimeout(hideScrollbarTimeout);
    };
  }, [scrollContainerRef]);
};

export default useDynamicScrollbar;
