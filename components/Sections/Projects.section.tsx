import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import projectsData from '../../lib/data/projectsData';
import useRevealAnimation from "../../lib/hooks/useRevealAnimation";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const metallicColors = [
  '#C9B037', // Glittering Gold
  '#4682B4', // Blue Metallic (example)
  '#9F9179', // Shiny Bronze
  '#A97142', // Copper Shine
  '#E6E8FA', // Gleaming Platinum
  '#D7D7D7', // Sparkling Steel
  '#ACACAC', // Glossy Aluminum
  '#707070', // Gunmetal Grey
  '#5D5C61', // Titanium Flash
  '#B4B4B4', // Radiant Pewter
  '#E5E4E2', // Bright Silver
];

const Projects = () => {
  const { ref, setupAnimation } = useRevealAnimation();
  const [isMobile, setIsMobile] = useState(false);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const swiperRef = useRef(null);
  const [clicked, setClicked] = useState(Array(projectsData.length).fill(false));

  useEffect(() => {
    setupAnimation();
  }, [setupAnimation]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    if (isMobile && swiperRef.current) {
      const totalWidth = swiperRef.current.scrollWidth;
      const visibleWidth = swiperRef.current.offsetWidth;
      setScrollBarWidth((visibleWidth / totalWidth) * 100);
    }
  }, [isMobile]);

  const handleCardClick = (index, url, event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isMobile) {
      window.open(url, '_blank', 'noopener noreferrer');
    } else {
      let newClicked = [...clicked];
      newClicked[index] = !newClicked[index];
      setClicked(newClicked);
    }
  };

  const handleFlipBack = (index, url) => {
    if (clicked[index]) {
      window.open(url, '_blank', 'noopener noreferrer');
    } else {
      let newClicked = [...clicked];
      newClicked[index] = false;
      setClicked(newClicked);
    }
  };

  useEffect(() => {
    let startX, startY;

    const handleTouchStart = (event) => {
      if (swiperRef.current && swiperRef.current.contains(event.target)) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
      }
    };

    const handleTouchMove = (event) => {
      if (startX === undefined || startY === undefined) return;

      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;
      const diffX = Math.abs(currentX - startX);
      const diffY = Math.abs(currentY - startY);

      if (swiperRef.current && swiperRef.current.contains(event.target)) {
        if (diffX > diffY) {
          event.preventDefault();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [swiperRef]);

  const renderProjectCard = (project, index) => {
    const staticColor = metallicColors[index % metallicColors.length];
    const cardStyle = { border: `4px solid ${staticColor}` };

    return (
      <Link key={index} href={project.url} passHref target="_blank" rel="noopener noreferrer"
      prefetch={false}>
        <div key={index} className="w-[14rem] h-[22rem] cursor-pointer card-flip" onClick={(e) => handleCardClick(index, project.url, e)}>
          {/* Front Face */}
          <div className={`card-front rounded-lg p-1 text-white ${clicked[index] ? 'flipped' : ''}`} style={cardStyle}>
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">{project.title}</p>
              <p>{project.tagline}</p>
            </div>
          </div>
          {/* Back Face */}
          <div className={`card-back rounded-lg p-1 text-white bg-primary backdrop-blur-sm shadow-lg flex flex-col justify-center items-center ${clicked[index] ? 'flipped' : ''}`} onClick={() => handleFlipBack(index, project.url)} style={cardStyle}>
            {/* Icons */}
            {[0, 1, 2, 3].map((pos) => (
              <div key={pos} className={`absolute ${pos % 2 === 0 ? 'top-2' : 'bottom-2'} ${pos < 2 ? 'left-2' : 'right-2'} tech-icon`}>
                <Image
                  src={project.technologies[pos]}
                  alt="Tech Icon"
                  layout="fill" // Use this to fill the parent container
                  objectFit="contain"
                />
              </div>
            ))}
            <div className="project-description text-center text-white text-base m-2">
              {project.detailedDescription}
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const updateScrollbarPosition = (swiper) => {
    const scrollbar = document.getElementById('custom-scrollbar');
    if (scrollbar) {
      const progress = swiper.progress;
      const position = progress * (139 - scrollBarWidth);
      scrollbar.style.transform = `translateX(${position}%)`;
    }
  };

  return (
    <div ref={ref} className="my-16 px-3 font-sen" id="projects">
      <p className="text-2xl sm:text-3xl font-bold text-white text-center">Featured Projects</p>
      {isMobile ? (
        <div className="flex flex-col items-center">
          <Swiper
            onProgress={updateScrollbarPosition}
            ref={swiperRef}
            slidesPerView={'auto'}
            spaceBetween={10}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="my-8 w-full max-w-md"
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  {renderProjectCard(project, index)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative w-full h-2 mt-2">
            <div className="absolute top-0 left-0 right-0 h-2 mx-auto w-3/4 bg-gray-200 rounded-full">
              <div id="custom-scrollbar" className="h-full bg-gray-600 rounded-full" style={{ width: `${scrollBarWidth}%` }}></div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Swipe horizontally to see more</p>
        </div>
      ) : (
        <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
          {projectsData.map(renderProjectCard)}
        </div>
      )}
    </div>
  );
};

export default Projects;
