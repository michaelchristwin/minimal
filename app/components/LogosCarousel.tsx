import { companyicons } from "~/assets/images/companies";
import { motion } from "motion/react";

const LogosCarousel: React.FC = () => {
  return (
    <motion.div
      className={`grid sm:grid-cols-7 grid-cols-1 w-full h-fit card-grid`}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {companyicons.map((logo, i) => (
        <div key={i}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="sm:w-full w-[180px] shadow-[_-1rem_0_3rem_rgba(0,0,0,0.25)] mx-auto sm:aspect-[2.5/3] aspect-[5/1] flex justify-center items-center p-3 lg:rounded-2xl rounded-xl bg-[#faf9f6]"
          >
            <picture>
              {Object.entries(logo.sources).map(([type, srcset]) => (
                <source key={type} type={`image/${type}`} srcSet={srcset} />
              ))}
              <img
                src={logo.img.src}
                width={logo.img.w}
                height={logo.img.h}
                alt={`Card ${i}`}
                className={`transition-all duration-300 ease-in-out object-cover`}
              />
            </picture>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};
export default LogosCarousel;
