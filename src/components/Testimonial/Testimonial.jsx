import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import { useEffect, useState } from "react";
import testimonialbg from "../../assets/testimonial-bg.png";
import testimonialbg2 from "../../assets/testimonial-bg2.png";
import testimonials from "../../assets/testimonials.json";
import Slider from "../common/Slider";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // next
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % testimonials.length;
      return nextIndex;
    });
  };

  // to go to the prev
  const prevSlide = () => {
    const totalSlides = Math.ceil(testimonials.length / 4);
    setCurrentIndex((prevIndex) => (prevIndex - 1) % totalSlides);
  };

  //auto play after 2 seconds using setIntercal function
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // duplicate the testimonials items
  const duplocateTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-[#FBF7F2] lg:min-h-screen py-8 lg:py-30 relative overflow-hidden">
      {/* 2 bg images for lg screen */}
      <img
        src={testimonialbg}
        alt="Background"
        className="absolute w-96 left-[-12rem] top-96 transform -translate-y-1/2 -rotate-90 hidden lg:block"
        style={{ objectFit: "cover" }}
      />
      <img
        src={testimonialbg2}
        alt="Background"
        className="absolute w-[28rem] right-[-6rem] bottom-24 transform -translate-y-1/2 rotate-[30deg] hidden lg:block"
        style={{ objectFit: "cover" }}
      />
      <div className="max-w-container mx-auto px-8 md:px-8 lg:px-0">
        <div className="flex justify-between items-center mb-4">
          <SectionTitle
            subtitle="Crispy, Every Bite Taste"
            title="What Some of my Customers Say"
          />
          {/* prev next for lg screen */}
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

        {/* slider for testimonial */}
        <Slider currentIndex={currentIndex}>
          {duplocateTestimonials.map((testimonial, id) => (
            <div key={id} className="flex-shrink-0 w-full py-6">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>

        {/* prev next for sm device
         */}
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

export default Testimonial;
