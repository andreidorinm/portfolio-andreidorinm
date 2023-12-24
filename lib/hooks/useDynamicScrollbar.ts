import { useEffect } from 'react';

const useDynamicScrollbar = (scrollContainerRef, setShowScrollButton) => {
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let hideScrollbarTimeout;

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

    const handleScroll = () => {
      // Logic to show/hide the scrollbar
      showScrollbar();

      // Logic to determine if the scroll-to-top button should be shown
      const isAtBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop <= scrollContainer.clientHeight + 100;
      const isMobile = window.innerWidth <= 768;
      setShowScrollButton(isAtBottom && isMobile);
    };

    scrollContainer.addEventListener('mouseover', showScrollbar);
    scrollContainer.addEventListener('mouseout', hideScrollbar);
    scrollContainer.addEventListener('scroll', handleScroll);

    hideScrollbar();

    return () => {
      scrollContainer.removeEventListener('mouseover', showScrollbar);
      scrollContainer.removeEventListener('mouseout', hideScrollbar);
      scrollContainer.removeEventListener('scroll', handleScroll);
      clearTimeout(hideScrollbarTimeout);
    };
  }, [scrollContainerRef, setShowScrollButton]);
};

export default useDynamicScrollbar;
