"use client";

import { Header } from "@/components";
import "./desktop.css";
import { HeroSection, OnBoardingSection } from "@/sections";
import { useState } from "react";
import PathSection from "@/sections/path-section/PathSection";
import FromAllWorldSection from "@/sections/from-all-world-section/FromAllWorldSection";

export default function Home() {
  const [miniState, setMiniState] = useState(true);

  return (
    <>
      <Header miniState={miniState} />
      <HeroSection setMiniState={setMiniState} />

      <FromAllWorldSection />

      <OnBoardingSection />
      <PathSection />
    </>
  );
}
