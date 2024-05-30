import { useState } from "react";

export default function TabsPanel({
  selected,
  onChangeSelected,
}: {
  selected: string;
  onChangeSelected: (selected: string) => void;
}) {
  return (
    <ul className="Tabs">
      <li
        className={`TabsItem ${selected == "EUR" ? "selected" : ""}`}
        onClick={() => onChangeSelected("EUR")}
      >
        Euros efectivo
      </li>
      <li
        className={`TabsItem ${selected == "USD" ? "selected" : ""}`}
        onClick={() => onChangeSelected("USD")}
      >
        USD efectivo
      </li>
      <li
        className={`TabsItem ${selected == "CUP" ? "selected" : ""}`}
        onClick={() => onChangeSelected("CUP")}
      >
        CUP transferencia/efectivo
      </li>
      <li
        className={`TabsItem ${selected == "MLC" ? "selected" : ""}`}
        onClick={() => onChangeSelected("MLC")}
      >
        MLC transferencia
      </li>
    </ul>
  );
}
