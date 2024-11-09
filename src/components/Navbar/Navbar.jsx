import { FaBars } from "react-icons/fa6";
import NavIcon from "../../assets/NavIcon";
import Button from "../common/Button";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Portfolio", href: "#about" },
    { label: "Clients", href: "#testimonial" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-20 flex justify-between items-center px-8 lg:px-0 py-5 lg:py-8">
      {/* left navbar, logo and links */}
      <div className="flex items-center gap-[60px]">
        <div className="flex items-center gap-1">
          <NavIcon />
          <h2 className="text-white font-poppins text-3xl">Restaurant</h2>
        </div>
        <div className="hidden lg:flex gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white text-sm font-medium hover:text-primary font-raleway"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <a href="#booking">
          <Button text="Book a Table" />
        </a>
      </div>

      <div className="lg:hidden flex items-center">
        <FaBars
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* mobile menu bar, toggle based on screen size */}
      <div
        className={`absolute top-14 right-0 w-2/3 bg-white text-black p-8 z-20 rounded-lg shadow-lg ${
          menuOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-black text-sm font-medium hover:text-primary font-raleway text-center"
            >
              {link.label}
            </a>
          ))}
          <div className="text-center">
            <a href="#booking">
              <Button text="Book a Table" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
