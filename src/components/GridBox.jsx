const GridBox = ({ icon: Icon, title, description }) => {
    return (
      <div className="flex flex-col items-start bg-white text-[#28B30F] p-6 rounded-lg shadow-md
      transition duration-300 hover:shadow-[0px_0px_10px_1px_#28b30f]">
        <div className="p-3 bg-[#D5FFCF] rounded-3xl mb-5"> {/* Circle Container */}
            <Icon className="w-10 h-10 p-1  " /> {/* Icon */}
        </div>
        <h2 className="text-2xl font-bold mb-3">{title}</h2> {/* Heading */}
        <p className="text-black text-lg">{description}</p> {/* Paragraph */}
      </div>
    );
  };
  
  export default GridBox;
  