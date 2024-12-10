import { useEffect, useState } from "react";
import { images } from "../../constants/Banner";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 10000);
    return () => clearTimeout(interval);
  }, [currentIndex]);
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className=" max-h-[230px]   h-[300px]  w-full relative">
      <div className="home-banner overflow-visible relative w-full">
        <img
          src={images[currentIndex]}
          alt=""
          className="w-full h-full flex object-cover"
        />
      </div>
      <div
        className="max-h-[250px] w-[84px] absolute h-full top-0 right-0 pr-[5px] text-right min-h-[1px] hover:bg-blue-200/10 cursor-pointer "
        onClick={handleNext}
      >
        <i className="carosal-right-arrow-icon"></i>
      </div>
      <div
        className="max-h-[250px] w-[84px] absolute h-full top-0 left-0 pr-[5px] text-right min-h-[1px] hover:bg-blue-200/10 cursor-pointer "
        onClick={handlePrevious}
      >
        <i className="carosal-left-arrow-icon"></i>
      </div>
    </div>
  );
}

export default Banner;
