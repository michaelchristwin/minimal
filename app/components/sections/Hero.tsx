import { useRef } from "react";
import Particles from "../Particles";
import { SolarGhibhify } from "~/assets/images";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  let hero = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: hero,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (!about) return;
    about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={hero} className={`w-full h-screen relative`}>
      <Particles />
      <motion.div
        className="absolute top-0 left-0 inset-0 w-full h-full"
        style={{ y }}
      >
        <picture>
          {Object.entries(SolarGhibhify.sources).map(([type, srcset], i) => (
            <source type={`image/${type}`} srcSet={srcset} key={i} />
          ))}
          <img
            src={SolarGhibhify.img.src}
            alt={`Solar city ghibhify`}
            className={`transition-all duration-300 ease-in-out object-cover w-full h-full object-center`}
          />
        </picture>
      </motion.div>
      <div className="flex w-full items-center justify-between text-white absolute bottom-[30px] sm:px-[40px] px-[20px] z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <h1 className="text-2xl text-start md:text-3xl font-bold mb-4 playwrite-hr block">
            Introducing
          </h1>
          <h1
            className="text-5xl md:text-8xl font-bold mb-4 block june-expt-variable"
            style={{
              fontVariationSettings: "'STYL' 60",
            }}
          >
            M3tering Protocol
          </h1>
          <h1 className="text-2xl text-end md:text-3xl font-bold inline-block playwrite-hr">
            V2
          </h1>
        </motion.div>
        <motion.button
          aria-label="Scroll Down"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToAbout}
          className={`sm:w-[70px] sm:h-[70px] h-[40px] w-[40px] flex justify-center items-center rounded-full bg-white animate-bounce hover:animate-none cursor-pointer z-20`}
        >
          <ChevronDown className="text-black" size={40} />
        </motion.button>
      </div>
    </div>
  );
};
export default Hero;
