import { useEffect, useState } from "react";
//@ts-expect-error"Could not find a declaration file for module '../../node_modules/colorthief/dist/color-thief.mjs'."
import ColorThief from "colorthief";
import { motion } from "motion/react";

const Metric: React.FC<{
  image: string;
  fallbackColor?: string;
  children: React.ReactNode;
  x?: number;
  y?: number;
}> = ({ image, fallbackColor, children, x, y }) => {
  const [gradientColor, setGradientColor] = useState("transparent");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (image) {
      const colorThief = new ColorThief();
      const img = new Image();
      img.crossOrigin = "Anonymous";

      img.onload = () => {
        try {
          // Get dominant color
          const color = colorThief.getColor(img);
          setGradientColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.85)`);
          setIsLoaded(true);
        } catch (e) {
          console.error("Color extraction failed:", e);
          // Use fallback color if extraction fails
          setGradientColor(fallbackColor || "rgba(0, 0, 0, 0.5)");
          setIsLoaded(true);
        }
      };

      img.src = image;
    } else {
      // No background image, use fallback
      setGradientColor(fallbackColor || "rgba(0, 0, 0, 0.5)");
      setIsLoaded(true);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="rounded-lg shadow-sm lg:p-7 md:p-5 p-4 h-64 flex items-end text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="metric-overlay z-[0]"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: `linear-gradient(to bottom, transparent, ${gradientColor})`,
          opacity: isLoaded ? "1" : "0",
          transition: "opacity 0.3s ease",
        }}
      />
      {children}
    </motion.div>
  );
};
export default Metric;
