import { useRef } from "react";
import { ETHCity } from "~/assets/images";
import { motion, useScroll, useTransform } from "motion/react";

const Section2 = () => {
  let wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
  });
  const textContainerY = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);

  return (
    <div
      ref={wrapper}
      id="about"
      className={`w-full relative p-[50px] h-[500vh] bg-[#faf9f6]`}
    >
      <div className="h-screen sticky top-[50px] sm:flex block justify-between items-center overflow-hidden">
        <div className={`sm:w-[48%] w-full h-full bg-[#faf9f6]`}>
          <picture className="z-20 relative">
            {Object.entries(ETHCity.sources).map(([type, srcset], i) => (
              <source type={`image/${type}`} srcSet={srcset} key={i} />
            ))}
            <img
              src={ETHCity.img.src}
              width={ETHCity.img.w}
              height={ETHCity.img.h}
              alt={`Ethereum City`}
              className={`transition-all duration-300 ease-in-out object-cover rounded-2xl z-20 relative`}
            />
          </picture>
        </div>

        <motion.div
          className={`sm:w-[48%] w-full block h-[100vh] z-[0] relative`}
          style={{ y: textContainerY }}
        >
          <div className="w-full h-[100vh] flex justify-center items-center">
            <motion.p
              className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text1 italic"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              "The M3tering Protocol is shifting energy infrastructure from
              centralized monopolies to a shared, open economy on Ethereum."
            </motion.p>
          </div>
          <div className="w-full h-[100vh] flex justify-center items-center">
            <motion.p
              className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text2 italic"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              "Whether it's a neighborhood solar farm or a shared battery
              network, the protocol enables the energy assets to be tokenized
              and transformed into liquid assets onchain that anyone can own,
              trade, and earn from permissionlessly."
            </motion.p>
          </div>
          <div className="w-full h-[100vh] flex justify-center items-center">
            <motion.p
              className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text3 italic"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              "Using the protocol, communities choose how their power is
              produced, allowing them to accelerate local clean energy
              adoption."
            </motion.p>
          </div>
          <div className="w-full h-[100vh] flex justify-center items-center">
            <motion.p
              className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text4 italic"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              "This is more than infrastructure; it's a solarpunk movement to
              democratize both ownership and access to energy."
            </motion.p>
          </div>
          <div className="w-full h-[100vh] flex justify-center items-center">
            <motion.p
              className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text5 italic"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              "It's literally and figuratively{" "}
              <span className="font-extrabold text-black">
                power to the people
              </span>
              ."
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Section2;
