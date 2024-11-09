import Hero from "../Hero/Hero"; 
import Navbar from "../Navbar/Navbar";
import bgheader from "../../assets/bg-header.png";

const Header = () => {
  return (
    <div className="relative bg-secondary text-white min-h-screen px-4">
      {/* bg image overlay */}
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-10"
        style={{
          backgroundImage: `url(${bgheader})`,
          backgroundSize: "8%",
        }}
      ></div>

      <div className="relative max-w-container mx-auto flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Header;
