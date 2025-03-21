import { useState } from "react";
import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" font-medium px-4 py-10 sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CarbonCrunch</h1>

        <div className="hidden md:flex space-x-6 bg-white rounded-3xl px-6 py-2">
          <a href="#" className="hover:text-[#28B30F]">Home</a>
          <a href="#" className="hover:text-[#28B30F]">Services</a>
          <a href="#" className="hover:text-[#28B30F]">Blogs</a>
          <a href="#" className="hover:text-[#28B30F]">About Us</a>
          <a href="#" className="hover:text-[#28B30F]">Contact</a>
        </div>

        <div className="hidden md:flex space-x-4">
        <button className="px-10 py-2 bg-[#D5FFCF] text-[#28B30F] font-bold rounded-lg hover:bg-[#28B30F] hover:text-[#D5FFCF]">
  Login
</button>
<button className="px-4 py-2 bg-[#28B30F] text-black font-bold rounded-lg hover:bg-[#D5FFCF]">
  Book Demo
</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-2 items-center bg-white shadow-md p-4">
          <a href="#" className="py-2 hover:text-[#28B30F]">Home</a>
          <a href="#" className="py-2 hover:text-[#28B30F]">Services</a>
          <a href="#" className="py-2 hover:text-[#28B30F]">Blogs</a>
          <a href="#" className="py-2 hover:text-[#28B30F]">About Us</a>
          <a href="#" className="py-2 hover:text-[#28B30F]">Contact</a>
          <button className="px-10 py-2 bg-[#D5FFCF] text-[#28B30F] font-bold  rounded-lg hover:bg-[#28B30F] hover:text-[#D5FFCF]">
  Login
</button>
<button className="px-4 py-2 bg-[#28B30F] text-black font-bold rounded-lg hover:bg-[#D5FFCF]">
  Book Demo
</button>
        </div>
      )}
    </nav>
  );
}
