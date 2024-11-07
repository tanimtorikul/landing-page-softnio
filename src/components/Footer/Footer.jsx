import bgimg from "../../assets/restaurant.jpeg";
import WatchIcon from "../../assets/WatchIcon";
import PhoneIcon from "../../assets/PhoneIcon";
import BookIcon from "../../assets/BookIcon";
import AddressIcon from "../../assets/AddressIcon";
import FacebookIcon from "../../assets/FacebookIcon";
import InstaIcon from "../../assets/InstaIcon";
import LinkedInIcon from "../../assets/LinkedInIcon";
import XIcon from "../../assets/XIcon";

const Footer = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
      }}
    >
      {/* overlay with backdrop blur effect */}
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-xl"></div>

      {/* main content */}
      <div className="flex justify-center items-center min-h-screen text-center relative z-10">
        <div className="max-w-container mx-auto py-10">
          <h2 className="font-display my-4 text-[40px] lg:text-6xl text-white mb-6 p-6 px-12">
            We are ready to give you the best dining experiences
          </h2>

          {/* icons with informations */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-white">
            {/* opening hrs */}
            <div className="flex flex-col items-center">
              <WatchIcon />
              <span className="text-2xl font-display my-4">Opening Hours</span>
              <span>Monday - Sunday </span>
              <span> 9:00 AM to 11:30 PM</span>
            </div>

            {/* contact */}
            <div className="flex flex-col items-center">
              <PhoneIcon />
              <span className="text-2xl font-display my-4">
                Let&apos;s Talk
              </span>
              <span>Phone: 1-800-222-4545 </span>
              <span>Fax: 1-800-222-45459</span>
            </div>

            {/* booking */}
            <div className="flex flex-col items-center">
              <BookIcon />
              <span className="text-2xl font-display my-4">Book a Table</span>
              <span>Email: demo@website.com</span>
              <span>Support: support@website.com</span>
            </div>

            {/* address */}
            <div className="flex flex-col items-center">
              <AddressIcon />
              <span className="text-2xl font-display my-4">Our Address</span>
              <span>123 Street, New York City, United</span>
              <span>States of America.</span>
            </div>
          </div>

          {/* social links */}
          <div className="flex justify-center gap-8 pt-12 lg:pt-24">
            <div className="border rounded-full p-4">
              <FacebookIcon />
            </div>
            <div className="border rounded-full p-4">
              <XIcon />
            </div>

            <div className="border rounded-full p-4">
              <InstaIcon />
            </div>
            <div className="border rounded-full p-4">
              <LinkedInIcon />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-white lg:text-xl mt-8">
            &copy; 2023 All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
