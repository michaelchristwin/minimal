import { useRef } from "react";
import type { Route } from "./+types/home";
import Hero from "~/components/sections/Hero";
import Section2 from "~/components/sections/Section2";
import MetricsSection from "~/components/sections/MetricsSection";
import CompaniesSection from "~/components/sections/CompaniesSection";

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
