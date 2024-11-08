import Button from "../common/Button";
// import heroimg from "../../assets/hero-img.png";
import BackgroundFlower from "../../assets/BackgroundFlower";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-between px-8 lg:px-0 py-8 lg:py-30 relative">
      {/* background flower image */}
      <div className="absolute top-72 lg:top-20 right-6 lg:right-0 translate-x-2">
        <BackgroundFlower className="w-32 h-auto" />
      </div>

      {/* left div */}
      <div className="flex flex-col items-start text-white lg:w-1/2 relative z-10">
        {/* heading with linear gradient with overlapping the image */}
        <h1 className="bg-[linear-gradient(90deg,_rgba(189,_31,_23,_0)_32.88%,_rgba(189,_31,_23,_0.7)_100%)] text-5xl lg:text-9xl text-left font-display w-full lg:w-[140%] relative z-10 mb-4">
          Taste the authentic Saudi cuisine
        </h1>

        <p className="text-xl lg:text-2xl text-left mb-10">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>
        {/* button */}
        <Button text="Explore Menu" />
      </div>

      {/* right div with increased width */}
      <div className="lg:w-[60%] flex justify-center relative">
        <img
          src='https://i.ibb.co.com/3h0DfSw/hero-img.png'
          alt="Hero"
          className="w-full h-auto object-cover shadow-lg"
        />
        {/* today's offer circled container */}
        <div className="absolute bottom-20 right-20 lg:bottom-10 lg:right-0 translate-x-14 translate-y-12 flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 bg-primary rounded-full p-2">
          <div className="flex items-center justify-center w-full h-full border-2 border-dashed border-secondary rounded-full">
            {/* inner content */}
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="font-display lg:text-[36px] text-black text-center leading-none">
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
