import { useState } from "react";

export default function TabsPanel({
  selected,
  onChangeSelected,
}: {
  selected: {
    type: string;
    category: string;
  };
  onChangeSelected: (selected: { type: string; category: string }) => void;
}) {
  return (
    <ul className="Tabs">
      <li
        className={`TabsItem ${selected.type == "EUR" ? "selected" : ""}`}
        onClick={() =>
          onChangeSelected({
            type: "EUR",
            category: "efectivo",
          })
        }
      >
        Euros efectivo
      </li>
      <li
        className={`TabsItem ${selected.type == "USD" ? "selected" : ""}`}
        onClick={() =>
          onChangeSelected({
            type: "USD",
            category: "efectivo",
          })
        }
      >
        USD efectivo
      </li>
      <li
        className={`TabsItem ${selected.type == "CUP" ? "selected" : ""}`}
        onClick={() =>
          onChangeSelected({
            type: "CUP",
            category: "transferencia / efectivo",
          })
        }
      >
        CUP transferencia/efectivo
      </li>
      <li
        className={`TabsItem ${selected.type == "MLC" ? "selected" : ""}`}
        onClick={() =>
          onChangeSelected({
            type: "MLC",
            category: "transferencia",
          })
        }
      >
        MLC transferencia
      </li>
    </ul>
  );
}
