import { useRef } from "react";
import Particles from "../Particles";
import { SolarGhibhify } from "~/assets/images";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  let hero = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: hero,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div ref={hero} className={`w-full h-screen relative`}>
      <Particles />
      <motion.div
        className="absolute top-0 left-0 inset-0 w-full h-full"
        style={{ y }}
      >
        <img
          src={SolarGhibhify.img.src}
          alt={`Solar city ghibhify`}
          className={`transition-all duration-300 ease-in-out object-cover w-full h-full object-center`}
        />
      </motion.div>
      <div className="block text-white absolute bottom-[30px] left-[40px]">
        <h1 className="text-2xl text-start md:text-3xl font-bold mb-4 playwrite-hr block text-yellow-500">
          Introducing
        </h1>
        <h1
          className="text-6xl md:text-8xl font-bold mb-4 block june-expt-variable"
          style={{
            fontVariationSettings: "'STYL' 60",
          }}
        >
          M3tering Protocol
          <span className="text-2xl text-end md:text-3xl font-bold inline-block playwrite-hr text-yellow-600">
            V2
          </span>
        </h1>
      </div>
    </div>
  );
};
export default Hero;
