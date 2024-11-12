import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import FoodCard from "./FoodCard";
import foods from "../../assets/foods.json";
import Slider from "../common/Slider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import bgimage1 from "../../assets/bg-img.webp";

const PopularFood = () => {
  // initial
  const [currentIndex, setCurrentIndex] = useState(0);

  // to go to the next slide, 4 items at a time
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % foods.length;
      return nextIndex;
    });
  };

  // to go to the prev slide, 4 items at a time
  const prevSlide = () => {
    const totalSlides = Math.ceil(foods.length / 4);
    setCurrentIndex((prevIndex) => (prevIndex - 1) % totalSlides);
  };

  // auto play after 4 seconds using setInterval function
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // duplicate the food items
  const duplicatedFoods = [...foods, ...foods];

  return (
    <div className="bg-[#FBF7F2] py-8 lg:py-30 relative overflow-hidden">
      {/* background img for large screens */}
      <img
        src={bgimage1}
        alt="Background"
        className="absolute lg:w-80 xl:w-96 left-[-16rem] top-72 transform -translate-y-1/2 -rotate-[70deg] hidden lg:block"
        style={{ objectFit: "cover" }}
      />
      <div className="max-w-container mx-auto px-8 lg:px-8 xl:px-0">
        {/* section title and navigation buttons */}
        <div className="flex justify-between items-center mb-4">
          <SectionTitle
            subtitle="Crispy, Every Bite Taste"
            title="POPULAR FOOD ITEMS"
          />
          {/* nav icons for larger devices */}
          <div className="space-x-4 hidden lg:flex">
            <button
              onClick={prevSlide}
              className="bg-white text-[#0A1425] p-3 rounded-full hover:text-secondary transition duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white text-[#0A1425] p-3 rounded-full hover:text-secondary transition duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Slider component for displaying food items */}
        <Slider currentIndex={currentIndex}>
          {duplicatedFoods.map((food, index) => (
            <div key={index} className="flex-shrink-0 w-full lg:w-1/4 px-2">
              <FoodCard food={food} />
            </div>
          ))}
        </Slider>

        {/* Navigation buttons for mobile devices */}
        <div className="flex justify-center space-x-4 mt-6 lg:hidden">
          <button
            onClick={prevSlide}
            className="bg-white text-[#0A1425] p-3 rounded-full hover:text-secondary transition duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-[#0A1425] p-3 rounded-full hover:text-secondary transition duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularFood;
