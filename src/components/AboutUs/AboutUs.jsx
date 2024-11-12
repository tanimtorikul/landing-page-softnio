import aboutImg from "../../assets/aboutimg.jpeg";
import Tabs from "./Tabs";
import ServiceOverview from "./ServiceOverview";
import bgimage1 from "../../assets/bg-img.webp";
import Ellipse from "../../assets/Ellipse";
import Ellipse2 from "../../assets/Ellipse2";

const AboutUs = () => {
  const tabs = [
    {
      label: "About",
      contentTitle: "Exceptional Culinary Experience and Delicious Food",
      content:
        "At the heart of our restaurant is a dedication to delivering exquisite culinary experiences. Our chefs blend traditional techniques with modern flavors to create dishes that delight and satisfy.",
      description:
        "We are passionate about food and believe in using only the finest ingredients to create exceptional meals. From locally sourced produce to expertly crafted dishes, every bite is designed to take your tastebuds on a journey. Whether you're here for a casual meal or a special celebration, we strive to make every dining experience unforgettable.",
      buttonText: "About more",
    },
    {
      label: "Experience",
      contentTitle: "Our Culinary Journey",
      content:
        "Our journey began with a shared love for exceptional food and an unwavering commitment to quality. Over the years, we've evolved, but our passion for creating delicious meals has remained the same.",
      description:
        "From humble beginnings to becoming a recognized name in the culinary world, our journey has been fueled by our dedication to innovation, quality, and service. Our team continues to explore new flavors and techniques, ensuring that every dining experience is fresh, exciting, and memorable.",
      buttonText: "Discover",
    },
    {
      label: "Contact",
      contentTitle: "Get in Touch with Us",
      content:
        "We would love to hear from you! Whether you want to book a table, inquire about our menu, or have a special request, our team is here to assist you.",
      description:
        "Contact us via phone, email, or by filling out the form below. We are available to answer your questions and provide you with any information you may need. We look forward to welcoming you and making your dining experience exceptional.",
      buttonText: "Contact Us",
    },
  ];

  return (
    <div className="py-12 xl:py-30 relative overflow-hidden px-8 lg:px-8 xl:px-0">
      {/* background image */}
      <img
        src={bgimage1}
        alt="Background"
        className="absolute w-72 right-0 bottom-56 xl:transform xl:translate-x-[60%] -rotate-45 hidden xl:block"
        style={{ objectFit: "cover" }}
      />
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* left side img */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full h-auto object-cover lg:scale-105"
            />
            {/* stats */}
            <div className="flex items-center gap-2 absolute top-6 xl:top-6 left-6 xl:left-4 bg-white text-black py-4 px-3 xl:py-6 xl:px-10 rounded-[20px] shadow-shadow">
              <div className="relative z-10 flex gap-2 items-center">
                {/* ellipse */}
                <div className="relative z-0 flex justify-center items-center">
                  {/* main ellipse */}
                  <Ellipse className="w-10 h-10 xl:w-20 xl:h-20 text-primary" />
                  <span className="absolute text-sm xl:text-[26px] font-bold">
                    50+
                  </span>
                </div>
                {/* ellipse stroke */}
                <div className="absolute bottom-9 xl:top-0 xl:left-0 transform translate-x-1 translate-y-2 z-0">
                  <Ellipse2 className="w-2 h-2 xl:w-4 xl:h-4 text-primary" />
                </div>

                <div className="font-semibold text-[10px] font-openSans xl:text-base">
                  <h2>Market</h2>
                  <h2>Experiences</h2>
                </div>
              </div>
            </div>
          </div>

          {/* right side, tabs */}
          <div className="w-full lg:w-1/2">
            <Tabs tabs={tabs} />
          </div>
        </div>
        <ServiceOverview />
      </div>
    </div>
  );
};

export default AboutUs;
