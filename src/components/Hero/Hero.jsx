import Button from "../common/Button";
import heroimg from "../../assets/hero-img.png";
import BackgroundFlower from "../../assets/BackgroundFlower";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-between max-w-container mx-auto px-4 py-12 relative">
      {/* background flower image */}
      <div className="absolute top-72 lg:top-2 right-2 lg:right-0 translate-x-2">
        <BackgroundFlower className="w-32 h-auto" />
      </div>

      {/* left div */}
      <div className="flex flex-col items-start space-y-6 text-white lg:w-1/2 relative z-10">
        {/* heading with linear gradient with overlapping the image */}
        <h1 className="bg-[linear-gradient(90deg,_rgba(189,_31,_23,_0)_32.88%,_rgba(189,_31,_23,_0.7)_100%)] text-5xl md:text-9xl text-left font-display w-full lg:w-[140%] relative z-10 mb-4">
          Taste the authentic Saudi cuisine
        </h1>

        <p className="text-xl lg:text-2xl text-left">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>
        {/* button */}
        <Button text="Explore Menu" />
      </div>

      {/* right div */}
      <div className="lg:w-1/2 flex justify-center relative">
        <img
          src={heroimg}
          alt="Hero"
          className="w-full h-auto object-cover shadow-lg"
        />

        {/* circled today's offer */}
        <div className="absolute bottom-20 right-20 lg:bottom-10 lg:right-0 translate-x-14 translate-y-12 flex items-center justify-center w-16 h-16 lg:w-28 lg:h-28 bg-primary rounded-full">
          {/* border */}
          <p className="absolute w-full h-full border-2 border-dashed border-secondary rounded-full"></p>
          {/* texts of the circled */}
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="font-display lg:text-4xl text-black text-center">
              Today
            </h2>
            <h2 className="font-display lg:text-4xl text-black text-center">
              Offer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
