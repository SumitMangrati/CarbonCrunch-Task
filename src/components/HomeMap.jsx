export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Rectangle Container */}
      <div className="w-[93vw] h-[90vh] bg-[#28b30f] shadow-2xl rounded-lg relative overflow-hidden flex justify-center items-center">
        
        {/* World Map */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="w-full h-full object-cover filter brightness-0 invert sepia saturate-[500%] hue-rotate-[60deg] opacity-90"
        />

        {/* Overlay Text (Centered) */}
        <div className="absolute text-center text-black">
          <h1 className="text-6xl font-bold mb-4">GHG Accounting</h1>
          <h1 className="text-6xl font-bold mb-10">Scope 1, Scope 2, Scope 3</h1>
          
          <p className="text-xl font-medium">Track minimize offset and report your carbon emissions <br></br> effortlessly
            to drive faster decarbonization progress
          </p>
        </div>
      </div>
    </div>
  );
}
