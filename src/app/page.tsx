"use client";

import { Header } from "@/components";
import "./desktop.css";
import { HeroSection, OnBoardingSection } from "@/sections";
import { useState } from "react";

export default function Home() {
  const [miniState, setMiniState] = useState(false);

  return (
    <>
      <Header miniState={miniState} />
      <HeroSection setMiniState={setMiniState} />
      <OnBoardingSection />
    </>
  );
}
