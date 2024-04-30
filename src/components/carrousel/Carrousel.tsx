"use client";

import { useEffect, useRef, useState } from "react";
import "./style/desktop.css";

export default function Carrousel() {
  const [selected, setSelected] = useState(0);
  const previousSelected = useRef(0);
  let previousSlider = data[previousSelected.current];
  let currentSlider = data[selected];
  let nextSlider = data[selected + 1];

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (selected < data.length - 1) {
        previousSelected.current = selected;
        setSelected(selected + 1);
      } else {
        previousSelected.current = selected;
        setSelected(0);
      }
    }, 3000);
    return () => {
      clearInterval(autoPlayInterval);
    };
  });

  switch (selected) {
    case 0:
      previousSlider = data[previousSelected.current];
      currentSlider = data[selected];
      nextSlider = data[selected + 1];

      break;
    case 1:
      previousSlider = data[previousSelected.current];
      currentSlider = data[selected];
      nextSlider = data[selected + 1];

      break;
    case 2:
      previousSlider = data[previousSelected.current];
      currentSlider = data[selected];
      nextSlider = data[0];
      break;
  }

  return (
    <div className="Carrousel">
      <div className="TabsContainer">
        <button
          className={`Tab ${selected == 0 ? "selected" : ""}`}
          onClick={() => {
            previousSelected.current = selected;

            setSelected(0);
          }}
        >
          <span className="Icon"></span>
        </button>
        <button
          className={`Tab ${selected == 1 ? "selected" : ""}`}
          onClick={() => {
            previousSelected.current = selected;

            setSelected(1);
          }}
        >
          <span className="Icon"></span>
        </button>
        <button
          className={`Tab ${selected == 2 ? "selected" : ""}`}
          onClick={() => {
            previousSelected.current = selected;

            setSelected(2);
          }}
        >
          <span className="Icon"></span>
        </button>
      </div>

      <div className="SliderContainer">
        <div className="Slider">
          <div
            className={`TransitionMarker exited ${previousSlider.className}`}
            key={selected - 1}
          >
            <div className="Content">
              <h3>{previousSlider.title}</h3>
              <p>{previousSlider.description}</p>
            </div>
            <div
              className="ImageDecorator"
              style={{ backgroundImage: `url(${previousSlider.imgUrl})` }}
            ></div>
            <div
              className="ImageDecoratorTwo"
              style={{ backgroundImage: `url(${previousSlider.imgUrlTwo})` }}
            ></div>
          </div>

          <div
            className={`TransitionMarker entered ${currentSlider.className}`}
            key={selected}
          >
            <div className="Content">
              <h3>{currentSlider.title}</h3>
              <p>{currentSlider.description}</p>
            </div>
            <div
              className="ImageDecorator"
              style={{ backgroundImage: `url(${currentSlider.imgUrl})` }}
            ></div>

            <div
              className="ImageDecoratorTwo"
              style={{ backgroundImage: `url(${currentSlider.imgUrlTwo})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    className: "One",
    title: "Rápido y seguro",
    description:
      "Envía dinero en cuestión de minutos desde la comodidad de su hogar",

    imgUrl: "/home-confort.png",
    imgUrlTwo: "/home-confort-v2.png",
  },
  {
    className: "Two",
    title: "Tarifas competitivas",
    description:
      "Ofrecemos tarifas bajas y transparentes para que más dinero llegue a destino",

    imgUrl: "/tasa-v2.png",
    imgUrlTwo: "/tasa.png",
  },
  {
    className: "Three",
    title: "Soporte dedicado",
    description:
      "Nuestro equipo está aquí para ayudarte en cada paso del proceso de envío de dinero.",

    imgUrl: "/soporte.png",
    imgUrlTwo: "/soporte-v2.png",
  },
];
