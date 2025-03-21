export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {/* Rectangle Container */}
      <div className="w-full max-w-[93vw] h-[90vh] bg-[#28b30f] shadow-2xl rounded-lg relative overflow-hidden flex justify-center items-center">
        
        {/* World Map */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="w-full h-full object-cover filter brightness-0 invert sepia saturate-[500%] hue-rotate-[60deg] opacity-90"
        />

        {/* Overlay Text */}
        <div className="absolute text-center text-black px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            GHG Accounting
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            Scope 1, Scope 2, Scope 3
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Track, minimize, offset, and report your carbon emissions effortlessly
            to drive faster decarbonization progress.
          </p>
        </div>
      </div>
    </div>
  );
}
