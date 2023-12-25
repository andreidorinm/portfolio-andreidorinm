const ScrollToTopButton = ({ scrollContainerRef }) => {
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top">
      ↑
    </button>
  );
};



export default ScrollToTopButton
