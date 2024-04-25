"use client";

import { useEffect, useRef } from "react";
import "./style/desktop.css";
import "./style/mobile.css";

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
      <div className="Decorator"></div>
      <div className="Decorator"></div>

      <header className="HeroTitle">
        <p>Servicio 100% garantizado</p>
        <h1>Remesas a Cuba y el mundo</h1>
        <button className="Button">Contactar</button>
      </header>

      <div className="CalculatorContainer">
        <div className="Calculator">
          <div className="PhoneDecoration Blur"></div>
          <div className="PhoneDecoration"></div>

          <div className="Card">
            <div className="CardTitle">
              <div className="UpdateTime">
                <span>Tasa actualizada</span> <hr /> <span>24/4/2024</span>
              </div>
              <div className="Header">
                <div className="Decoration"></div>
                <h3> Calculadora de Tarifas</h3>
                <div className="Decoration"></div>
              </div>
              <p>
                calcule el precio de su envio en base a nuestra tasa de cambio.
              </p>
            </div>

            <div className="CurrentValue">
              <p>1 USD = 340 CUP</p>
              <p>1 USD = 0.8 MLC</p>
              <p>1 USD = 0.9 EUR</p>
            </div>

            <div className="Inputs">
              <div className="Container">
                <p>Cantidad a Enviar</p>
                <label className="InputContainer">
                  <input className="Input" type="number" />
                </label>
              </div>
              <div className="Container">
                <p>Cantidad a Recibir</p>
                <label className="InputContainer">
                  <input className="Input" type="number" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
