import React, { useState, useRef, useEffect } from "react";

const ImageComparisonSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const containerWidth = containerRect.width;

    // Calculate position as percentage and clamp between 0 and 100
    const position = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - containerRect.left;
    const containerWidth = containerRect.width;

    // Calculate position as percentage and clamp between 0 and 100
    const position = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(position);
  };

  useEffect(() => {
    // Add event listeners to document for mouse/touch events
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  // Calculate font sizes based on slider position
  const beforeFontSize = 14 + (24 - 14) * (sliderPosition / 100) * 2;
  const afterFontSize = 14 + (24 - 14) * ((100 - sliderPosition) / 100) * 2;

  return (
    <div
      ref={containerRef}
      className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden w-full max-w-3xl mx-auto select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Bottom Layer) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover pointer-events-none"
        />
        <span
          className="absolute top-30 sm:top-60 right-5 bg-white/80 px-3 py-1 rounded font-bold transition-all duration-300"
          style={{ fontSize: `${afterFontSize}px` }}
        >
          After
        </span>
      </div>

      {/* Before Image (Top Layer with clip) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <span
          className="absolute top-30 sm:top-60 left-5 bg-white/80 px-3 py-1 rounded font-bold transition-all duration-300"
          style={{ fontSize: `${beforeFontSize}px` }}
        >
          Before
        </span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-10 cursor-ew-resize z-10 flex items-center justify-center"
        style={{ left: `calc(${sliderPosition}% - 20px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="h-full w-0.5 bg-white"></div>
        <div className="absolute w-10 h-10 rounded-full bg-white border-2 border-blue-500 shadow-md flex items-center justify-center">
          <div className="w-2.5 h-0.5 bg-blue-500 -ml-1"></div>
          <div className="w-2.5 h-0.5 bg-blue-500 ml-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
