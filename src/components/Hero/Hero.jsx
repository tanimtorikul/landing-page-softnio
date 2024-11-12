import Button from "../common/Button";
import BackgroundFlower from "../../assets/BackgroundFlower";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 items-center justify-between px-8 xl:px-0 py-8 xl:py-30 relative">
      {/* background flower image */}
      <div className="absolute top-72 xl:top-20 right-6 lg:top-2 xl:right-0 translate-x-2">
        <BackgroundFlower className="w-32 h-auto" />
      </div>

      {/* left div */}
      <div className="flex flex-col items-start text-white w-full xl:w-1/2 relative z-10">
        {/* heading with linear gradient with overlapping the image */}
        <h1 className="bg-[linear-gradient(90deg,_rgba(189,_31,_23,_0)_32.88%,_rgba(189,_31,_23,_0.7)_100%)] text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-left font-display w-full lg:w-[130%] xl:w-[140%] relative z-10 mb-4 leading-56 ">
          Taste the authentic Saudi cuisine
        </h1>

        <p className="text-lg xl:text-2xl text-left mb-8 xl:mb-10">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>
        {/* button */}
        <Button text="Explore Menu" />
      </div>

      {/* right div with increased width */}
      <div className="lg:w-[80%] xl:w-[60%] flex justify-center relative">
        <img
          src="https://i.ibb.co.com/PFcp0tL/hero-img.webp"
          alt="Hero"
          className="w-full h-auto object-cover shadow-lg"
        />
        {/* today's offer circled container */}
        <div className="absolute bottom-16 xl:bottom-10 right-10 xl:right-0 translate-x-10 xl:translate-x-14 translate-y-8 xl:translate-y-12 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32 bg-primary rounded-full p-2">
          <div className="flex items-center justify-center w-full h-full border-2 border-dashed border-secondary rounded-full">
            {/* inner content */}
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="font-display lg:text-xl xl:text-[36px] text-black text-center leading-none">
                Today <br />
                Offer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
