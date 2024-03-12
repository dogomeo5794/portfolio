import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  // "client:visible"?: boolean
  images: Array<string>
  path?: string
}

const Carousel: React.FC<Props> = ({ images, path = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  let options = {
    root: carouselRef.current,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const detectScroll = (entries: any) => {
    let nextSlide;
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        nextSlide = parseInt(entry.target.getAttribute("data-index"));
        setCurrentSlide(nextSlide);
      }
    });
  };

  useEffect(() => {
    if (carouselRef.current) {
      let observer = new IntersectionObserver(detectScroll, options);
      for (let i = 0; i < carouselRef.current.children.length; i++) {
        observer.observe(carouselRef.current.children[i]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselRef]);

  const changeSlide = (direction: string) => {
    let nextSlide = direction === "left" ? currentSlide - 1 : currentSlide + 1;
    if (nextSlide < 0) nextSlide = images.length - 1;
    else if (nextSlide >= images.length) nextSlide = 0;
    let containerWidth = containerRef.current?.clientWidth || 0;
    carouselRef.current?.scroll(nextSlide * containerWidth, 0);
  };

  return (
    <div
      className="relative flex justify-center items-center w-full bg-black overflow-hidden"
      ref={containerRef}
    >
      <ul
        className="carousel-viewport flex gap-0 h-fit scroll-smooth snap-x snap-mandatory overflow-x-scroll overflow-y-hidden transition-all duration-200"
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <li
            className="flex-shrink-0 flex-grow-0 snap-start snap-always gap-0 w-full"
            key={index}
            data-index={index}
          >
            <Image
              className="w-full h-full"
              src={`/projects/${path}/${image}`}
              alt=""
              loading="lazy"
              width={100}
              height={100}
              loader={(src) => `${src.src}?w=${src.width}`}
            />
          </li>
        ))}
      </ul>
      {currentSlide !== 0 && (
        <button
          className="absolute hidden sm:flex justify-center items-center h-[26px] w-[26px] border-0 rounded-full text-light-texto-secondary bg-[#fffb] left-2 pr-[2px] hover:bg-[#fffe] transition-colors"
          onClick={() => changeSlide("left")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            height="16"
            width="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      {currentSlide !== images.length - 1 && (
        <button
          className="absolute hidden sm:flex justify-center items-center h-[26px] w-[26px] border-0 rounded-full text-light-texto-secondary bg-[#fffb] right-2 hover:bg-[#fffe] transition-colors"
          onClick={() => changeSlide("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            height="16"
            width="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
      <span className="absolute right-2 bottom-2 py-1 px-2 bg-[#fffb] rounded-md text-light-texto-secondary text-[0.75rem] font-bold">
        {currentSlide + 1} / {images.length}
      </span>
    </div>
  );
};

export default Carousel;
