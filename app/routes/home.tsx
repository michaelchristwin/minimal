import { lazy, useRef } from "react";
import type { Route } from "./+types/home";
const Hero = lazy(() => import("~/components/sections/Hero"));
const Section2 = lazy(() => import("~/components/sections/Section2"));
const MetricsSection = lazy(
  () => import("~/components/sections/MetricsSection")
);
const CompaniesSection = lazy(
  () => import("~/components/sections/CompaniesSection")
);
const sections = [Hero, Section2, MetricsSection, CompaniesSection];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | M3tering Protocol" },
    { name: "description", content: "Welcome to M3tering Protocol!" },
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
