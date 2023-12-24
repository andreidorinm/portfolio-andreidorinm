import React, { useEffect } from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const button = document.getElementById('scrollToTopButton');
    button.style.display = 'none'; // Initially hide the button

    const toggleVisibility = () => {
      // Log current scroll position and page offset for debugging
      console.log("Scroll Y:", window.scrollY, "Offset Height:", document.body.offsetHeight, "Inner Height:", window.innerHeight);

      // Check if the user is near the bottom of the page and on a mobile device
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 && window.innerWidth <= 768) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    };

    // Throttle scroll event listener (optional)
    const throttledToggle = throttle(toggleVisibility, 100);

    window.addEventListener('scroll', throttledToggle);
    return () => window.removeEventListener('scroll', throttledToggle);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-1/2 transform translate-x-1/2 z-50 p-2 bg-gray-800 text-white rounded-full shadow-lg"
      id="scrollToTopButton"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
