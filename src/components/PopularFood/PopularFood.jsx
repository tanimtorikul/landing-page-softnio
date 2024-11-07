import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import FoodCard from "./FoodCard";
import foods from "../../assets/foods.json";
import Slider from "../common/Slider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import bgimage1 from "../../assets/bg-img.png";

const PopularFood = () => {
  // initial
  const [currentIndex, setCurrentIndex] = useState(0);

  // to go to the next slide, 4 items at a time
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(foods.length / 4)
    );
  };

  // to go to the prev slide, 4 items at a time
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(foods.length / 4)) %
        Math.ceil(foods.length / 4)
    );
  };

  return (
    <div className="bg-[#FBF7F2] h-[80vh] py-16 relative overflow-hidden">
      {/* background img */}
      <img
        src={bgimage1}
        alt="Background"
        className="absolute w-96 left-[-16rem] top-72 transform -translate-y-1/2 -rotate-[70deg] hidden lg:block"
        style={{ objectFit: "cover" }}
      />
      <div className="max-w-container mx-auto px-4">
        {/* section title and nav icons flex each other */}
        <div className="flex justify-between items-center mb-4">
          <SectionTitle
            subtitle="Crispy, Every Bite Taste"
            title="POPULAR FOOD ITEMS"
          />
          {/* nav icons for larger device */}
          <div className="space-x-4 hidden lg:flex">
            <button
              onClick={prevSlide}
              className="bg-white text-[#0A1425] p-3 rounded-full hover:bg-secondary transition duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white text-secondary p-3 rounded-full hover:bg-primary transition duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/*  using slider compo here and passing the foodcard as children props and passing currentindex */}
        <Slider currentIndex={currentIndex}>
          {foods.map((food, index) => (
            <div key={index} className="flex-shrink-0 w-full lg:w-1/4 px-2">
              <FoodCard food={food} />
            </div>
          ))}
        </Slider>

        {/* nav icons for mobile devices under the card */}
        <div className="flex justify-center space-x-4 mt-6 lg:hidden">
          <button
            onClick={prevSlide}
            className="bg-white text-[#0A1425] p-3 rounded-full hover:bg-secondary transition duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-secondary p-3 rounded-full hover:bg-primary transition duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularFood;
