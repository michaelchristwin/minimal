import {
  Panel,
  WindTurbine,
  Revenue,
  EcoVillages,
} from "~/assets/images/metrics";
import Counter from "~/components/Counter";
import Metric from "~/components/Metric";
import { motion } from "motion/react";

function MetricsSection() {
  return (
    <div className="two section h-[100dvh] flex justify-center items-center p-[50px]">
      <section className={`h-full w-full bg-[#faf9f6] text-black`}>
        <div className="h-full py-12">
          <div className="space-y-[50px]">
            <h2
              className={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px] fade-in-block`}
            >
              Real Environmental Impact; Real Economic Value
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Top row: 2 cards */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-lg shadow-sm h-64 flex items-center justify-center text-center"
              >
                <div className="w-full h-full">
                  <video
                    src="/videos/m3terhead.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  ></video>
                </div>
              </motion.div>

              <Metric image={Panel.img.src} x={100}>
                <div
                  className={`block text-center space-y-[5px] w-full z-2 text-white`}
                >
                  <Counter max={10000} />
                  <p className={`font-[600] text-[20px] fade-in-block`}>
                    kWh of electricity generated
                  </p>
                </div>
              </Metric>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Metric image={WindTurbine.img.src} x={-100}>
                <div
                  className={`block text-center space-y-[5px] w-full z-2 text-white`}
                >
                  <Counter max={4000} />
                  <p className={`font-[600] text-[20px] fade-in-block`}>
                    Tonnes of CO₂ prevented
                  </p>
                </div>
              </Metric>

              <Metric image={Revenue.img.src} y={50}>
                <div
                  className={`block text-center space-y-[5px] w-full z-2 text-white`}
                >
                  <Counter max={30000} prefix="$" />
                  <p className={`font-[600] text-[20px] fade-in-block`}>
                    Revenue generated
                  </p>
                </div>
              </Metric>

              <Metric image={EcoVillages.img.src} x={100}>
                <div
                  className={`block text-center space-y-[5px] w-full z-2 text-white`}
                >
                  <Counter max={6} />
                  <p className={`font-[600] text-[20px] fade-in-block`}>
                    Ecovillages
                  </p>
                </div>
              </Metric>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default MetricsSection;
