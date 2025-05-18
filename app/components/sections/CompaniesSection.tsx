import { useRef } from "react";
import LogosCarousel from "../LogosCarousel";

function CompaniesSection() {
  const container = useRef<HTMLDivElement>(null);
  return (
    <div
      className="three section sm:h-[100dvh] h-fit flex justify-center items-center px-4"
      ref={container}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full h-fit sm:space-y-8 space-y-4 transition-all duration-700 ease-out px-4">
          <h2 className="text-center text-black font-semibold lg:text-[30px] md:text-[28px] text-[20px]">
            Let's build your project next
          </h2>
          <LogosCarousel />
        </div>
      </div>
    </div>
  );
}
export default CompaniesSection;
