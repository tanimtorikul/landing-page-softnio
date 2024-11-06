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
    <div className="flex justify-between items-center px-4 py-4">
      {/* left navbar, logo and links */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-1">
          <NavIcon />
          <h2 className="text-white font-poppins text-3xl">Restaurant</h2>
        </div>
        <div className="hidden lg:flex space-x-12">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-primary font-raleway font-medium"
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
