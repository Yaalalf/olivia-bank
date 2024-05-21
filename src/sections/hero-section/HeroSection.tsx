"use client";

import { useEffect, useRef } from "react";
import "./style/desktop.css";
import "./style/mobile.css";
import Calculator from "@/components/Calculator";

export default function HeroSection({
  setMiniState,
}: {
  setMiniState: (nextState: boolean) => void;
}) {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    console.log(heroSectionRef.current);

    let options = {
      rootMargin: "0px",
      threshold: 0.9,
    };

    let observer = new IntersectionObserver((entries, observer) => {
      console.log(entries[0].isIntersecting);

      if (entries[0].isIntersecting) {
        setMiniState(false);
      } else {
        setMiniState(true);
      }
    }, options);

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }
  });

  return (
    <section ref={heroSectionRef} className="HeroSection">
      <div className="Decorator"></div>
      {/* <div className="Decorator"></div>
      <div className="Decorator"></div> */}

      <header className="HeroTitle">
        <p>Servicio 100% garantizado</p>
        <h1>
          Remesas a <span>Cuba</span> sin <span>Restricciones</span>.
        </h1>
        <button className="Button">¡Envia dinero ahora!</button>
      </header>

      <Calculator />
    </section>
  );
}
