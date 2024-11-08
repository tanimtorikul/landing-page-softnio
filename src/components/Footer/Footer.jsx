import bgimg from "../../assets/restaurant.jpeg";
import WatchIcon from "../../assets/WatchIcon";
import PhoneIcon from "../../assets/PhoneIcon";
import BookIcon from "../../assets/BookIcon";
import AddressIcon from "../../assets/AddressIcon";
import FacebookIcon from "../../assets/FacebookIcon";
import InstaIcon from "../../assets/InstaIcon";
import LinkedinIcon from "../../assets/LinkedinIcon";
import XIcon from "../../assets/XIcon";

const Footer = () => {
  return (
    <div
      className="relative bg-cover"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      {/* overlay with backdrop blur effect */}
      <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-[3.25px]"></div>

      {/* main content */}
      <div className="flex justify-center items-center text-center relative z-10 py-8 lg:py-30">
        <div className="max-w-container mx-auto">
          <h2 className="font-display text-4xl lg:text-6xl text-white p-8 lg:p-0">
            We ready to give you the best dining experiences
          </h2>

          {/* icons with information */}
          <div className="flex flex-col lg:flex-row justify-between text-white pt-12 space-y-10 lg:space-y-0 lg:space-x-32">
            {/* opening hrs */}
            <div className="flex flex-col items-center justify-center">
              <WatchIcon />
              <span className="text-2xl font-display mt-6 mb-3">
                Opening Hours
              </span>
              <span>Monday - Sunday</span>
              <span>9:00 AM to 11:30 PM</span>
            </div>

            {/* contact */}
            <div className="flex flex-col items-center">
              <PhoneIcon />
              <span className="text-2xl font-display my-4">
                Let&apos;s Talk
              </span>
              <span>Phone: 1-800-222-4545</span>
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

          {/* social links and copyright */}
          <div className="pt-[60px] lg:pt-30">
            {/* social links */}
            <div className="flex justify-center gap-8">
              <div className="border rounded-full p-2 lg:p-4">
                <FacebookIcon />
              </div>
              <div className="border rounded-full p-2 lg:p-4">
                <XIcon />
              </div>

              <div className="border rounded-full p-2 lg:p-4">
                <InstaIcon />
              </div>
              <div className="border rounded-full p-2 lg:p-4">
                <LinkedinIcon />
              </div>
            </div>

            {/* Copyright */}
            <div className="text-white lg:text-xl mt-6">
              &copy; 2023 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
