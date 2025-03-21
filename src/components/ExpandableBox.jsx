const HoverBox = ({ number, title, description }) => {
    return (
      <div 
        className="h-40 bg-white p-6 rounded-lg shadow-md overflow-hidden 
                   flex flex-col justify-center items-center transition-all duration-700 ease-out cursor-pointer  relative group"
      >
        {/* Title & Heading (Hidden on Hover) */}
        <div className="absolute text-[#28B30F] inset-0 text-center p-5 flex flex-col justify-center items-center transition-opacity duration-500 group-hover:opacity-0">
          <h2 className="text-3xl font-bold">{number}</h2>
          <h3 className="text-xl font-semibold mt-2 text-center">{title}</h3>
        </div>
  
        {/* Full Paragraph (Visible on Hover) */}
        <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center text-lg">
          {description}
        </p>
      </div>
    );
  };
  
  export default HoverBox;
  