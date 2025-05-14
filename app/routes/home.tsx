import { lazy, useEffect, useRef } from "react";
import type { Route } from "./+types/home";
const Hero = lazy(() => import("~/components/sections/Hero"));
const Section2 = lazy(() => import("~/components/sections/Section2"));
const Section3 = lazy(() => import("~/components/sections/Section3"));
const sections = [Hero, Section2, Section3];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const container = useRef<HTMLElement>(null);

  return (
    <main className="home" ref={container}>
      {sections.map((Component, i) => (
        <Component key={i} />
      ))}
    </main>
  );
}
