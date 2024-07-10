"use client";

import { useState } from "react";
import "./style/desktop.css";
import "./style/mobile.css";

import YlHeader from "@/components/Library/yl-header";

export default function HeaderSection() {
  const [selected, setSelected] = useState(0);

  return (
    <YlHeader
      isMobileFirst
      className="HeaderSection"
      mobile={
        <>
          <div className="Logo"></div>

          <button className="Menu_Icon"></button>
        </>
      }
      desktop={
        <nav className="NavMenu">
          <ul>
            <li className={selected === 0 ? "selected" : ""}>
              <button onClick={(e) => setSelected(0)}>Inicio</button>
            </li>
            <li className={selected === 1 ? "selected" : ""}>
              <button onClick={(e) => setSelected(1)}>Servicios</button>
            </li>
            <div className="Logo"></div>
            <li className={selected === 2 ? "selected" : ""}>
              <button onClick={(e) => setSelected(2)}>Sobre Nosotros</button>
            </li>
            <li className={selected === 3 ? "selected" : ""}>
              <button onClick={(e) => setSelected(3)}>FAQ</button>
            </li>

            <li>
              <button>Enviar dinero</button>
            </li>
          </ul>
        </nav>
      }
    />
  );
}
