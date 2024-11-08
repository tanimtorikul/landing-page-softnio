import { useEffect, useState } from "react";

const Slider = ({ children, currentIndex }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // to check the screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${
            currentIndex * (isLargeScreen ? 100 : 100)
          }%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
