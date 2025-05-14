import { useRef } from "react";
import Particles from "../Particles";

const Hero = () => {
  let hero = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={hero}
      className={`w-full h-[100dvh] flex justify-center items-center snap-section bg-blue-600 relative`}
    >
      <Particles />
      <div className="w-[90%] sm:w-[50%] text-white">
        <div className="w-full heroText1">
          <h1 className="text-2xl text-start md:text-3xl font-bold mb-4 hero-text">
            <span className="inline-block transition-all duration-700 ease-out playwrite-hr">
              Introducing
            </span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 hero-text">
            <span
              className="inline-block transition-all duration-700 ease-out june-expt-variable"
              style={{
                fontVariationSettings: "'STYL' 60",
              }}
            >
              M3tering
            </span>
          </h1>
        </div>
        <div className="heroText2 w-full">
          <h1 className="text-6xl text-end md:text-8xl font-bold hero-text">
            <span
              className="inline-block transition-all duration-700 ease-out june-expt-variable"
              style={{
                fontVariationSettings: "'STYL' 60",
              }}
            >
              Protocol
            </span>
          </h1>
          <h1 className="text-2xl text-end md:text-3xl font-bold hero-text">
            <span className="inline-block transition-all duration-700 ease-out playwrite-hr">
              V2
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;
