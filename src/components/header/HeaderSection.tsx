"use client";

import { useState } from "react";
import "./style/desktop.css";

export default function HeaderSection({ miniState }: { miniState: boolean }) {
  const [selected, setSelected] = useState(0);

  const classNames = !miniState ? "HeaderSection Mini" : "HeaderSection";

  return (
    <header className={classNames}>
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
    </header>
  );
}
