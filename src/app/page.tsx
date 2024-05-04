"use client";

import { Header } from "@/components";
import "./desktop.css";
import { HeroSection, OnBoardingSection } from "@/sections";
import { useState } from "react";
import PathSection from "@/sections/path-section/PathSection";

export default function Home() {
  const [miniState, setMiniState] = useState(true);

  return (
    <>
      <Header miniState={miniState} />
      <HeroSection setMiniState={setMiniState} />
      <OnBoardingSection />
      <PathSection />
    </>
  );
}
