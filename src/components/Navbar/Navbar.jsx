import { FaBars } from "react-icons/fa6";
import NavIcon from "../../assets/NavIcon";
import Button from "../common/Button";

const Navbar = () => {
  // navlinks
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Clients", href: "#clients" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex justify-between items-center px-8 lg:px-0 py-5 lg:py-8">
      {/* left navbar, logo and links */}
      <div className="flex items-center gap-[60px]">
        {/* logo and text */}
        <div className="flex items-center gap-1">
          <NavIcon />
          <h2 className="text-white font-poppins text-3xl">Restaurant</h2>
        </div>
        {/* navlinks */}
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

      {/* right navbar, button */}
      <div className="hidden lg:block">
        <Button text="Book a Table" />
      </div>

      {/* hamburger for mobile devices */}
      <div className="lg:hidden flex items-center">
        <FaBars className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
