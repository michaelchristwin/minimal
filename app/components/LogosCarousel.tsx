import { companyicons } from "~/assets/images/companies";
import { motion, type Variants } from "motion/react";

const LogosCarousel: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`grid sm:grid-cols-7 grid-cols-1 w-full h-fit card-grid`}
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
    >
      {companyicons.map((logo, i) => {
        const { scale, zIndex } = getStyle(i);
        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50, scale },
              show: { opacity: 1, y: 0, scale },
            }}
            initial={"hidden"}
            whileInView={"show"}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{ zIndex }}
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
        );
      })}
    </motion.div>
  );
};
export default LogosCarousel;

const getStyle = (i: number) => {
  switch (i) {
    case 3:
      return { scale: 1.14, zIndex: 3 };
    case 2:
    case 4:
      return { scale: 1.08, zIndex: 2 };
    case 1:
    case 5:
      return { scale: 1.05, zIndex: 1 };
    default:
      return { scale: 1, zIndex: 0 };
  }
};
