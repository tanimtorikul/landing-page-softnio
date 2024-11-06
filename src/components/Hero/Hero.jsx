import Button from "../common/Button";
import heroimg from '../../assets/hero-img.png'

const Hero = () => {
  return (
    <div className="flex items-center justify-between max-w-container mx-auto px-4 py-12">
      {/* left */}
      <div >
      
        <Button text="Explore Menu" />
      </div>

      {/* right */}
      <div >
       
      </div>
    </div>
  );
};

export default Hero;
