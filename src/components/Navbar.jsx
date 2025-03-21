import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(prevScrollY > currentScrollY || currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav
      className={`bg-[#f5f6f1] font-medium px-4 py-10 sticky top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-[#28B30F]">CarbonCrunch</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 bg-white rounded-3xl px-6 py-2">
          {["Home", "Services", "Blogs", "About Us", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-[#28B30F] transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-6 py-2 bg-[#D5FFCF] text-[#28B30F] font-bold rounded-lg hover:bg-[#28B30F] hover:text-[#D5FFCF] transition-all">
            Login
          </button>
          <button className="px-6 py-2 bg-[#28B30F] text-white font-bold rounded-lg hover:bg-[#D5FFCF] hover:text-black transition-all">
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-white shadow-lg absolute w-full left-0 top-16 transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-96 py-4" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {["Home", "Services", "Blogs", "About Us", "Contact"].map((item) => (
          <a key={item} href="#" className="py-2 hover:text-[#28B30F] transition-colors">
            {item}
          </a>
        ))}
        <button className="mt-4 px-6 py-2 bg-[#D5FFCF] text-[#28B30F] font-bold rounded-lg hover:bg-[#28B30F] hover:text-[#D5FFCF] transition-all">
          Login
        </button>
        <button className="mt-2 px-6 py-2 bg-[#28B30F] text-white font-bold rounded-lg hover:bg-[#D5FFCF] hover:text-black transition-all">
          Book Demo
        </button>
      </div>
    </nav>
  );
}
