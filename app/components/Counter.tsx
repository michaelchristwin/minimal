import NumberFlow, {
  continuous,
  type NumberFlowElement,
} from "@number-flow/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type CounterProps = {
  max: number;
  prefix?: string;
  duration?: number;
};

const MotionNumberFlow = motion.create(NumberFlow);

function Counter({ max, prefix, duration = 4000 }: CounterProps) {
  const [value, setValue] = useState(0);
  const counter = useRef<NumberFlowElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isVisible = useRef(false);

  // Handle counting logic in a separate useEffect
  useEffect(() => {
    if (!isVisible.current) return;

    // Reset value when visibility changes to true
    setValue(0);

    // Clear any running interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    const stepCount = 60;
    const step = Math.ceil(max / stepCount);
    const interval = duration / stepCount;

    intervalRef.current = setInterval(() => {
      setValue((prev) => {
        const next = prev + step;
        if (next >= max) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return max;
        }
        return next;
      });
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [duration, max, isVisible.current]);

  // Handle intersection observer separately
  useEffect(() => {
    const node = counter.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;

        if (!entry.isIntersecting && intervalRef.current) {
          // Clear on exit to stop mid-animation
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <MotionNumberFlow
      layout
      layoutRoot
      value={value}
      prefix={prefix}
      ref={counter}
      plugins={[continuous]}
      style={{
        //@ts-ignore
        "--number-flow-char-height": "0.85em",
        "--number-flow-mask-height": "0.3em",
      }}
      className="font-extrabold space-mono-bold sm:text-[50px] text-[40px]"
    />
  );
}

export default Counter;
