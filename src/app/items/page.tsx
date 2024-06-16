"use client";

import Title from "@/components/title/Title";
import TabsPanel from "@/components/tabs/TabsPanel";
import "./desktop.css";
import "./mobile.css";
import { useState, ReactNode } from "react";

export default function Items() {
  const [selected, setSelected] = useState({
    type: "EUR",
    category: "efetivo",
  });

  const [tasa, setTasa] = useState(400);

  return (
    <div className="ItemsPage">
      <div className="TitleContainer">
        <div className="Background"></div>
        <div className="DecoratorBackground"></div>

        <Title
          title="Seleccione el producto"
          description="Una vez realizado el pago se procedera ha ahcer la transferencia"
          decoration
        />
        <div className="DecoratorBackground"></div>
      </div>
      <div className="TabsContainer">
        <div className="Title">
          <div className="Decorator"></div>
          <h2>Catálogo de productos</h2>
        </div>

        <TabsPanel
          selected={selected}
          onChangeSelected={(selected) => setSelected(selected)}
        />
      </div>
      {selected.type == "CUP" && (
        <div className="TasaDeCambio">
          <label>
            Tasa de Cambio{" "}
            <div className="InputContainer">
              <input
                className="InputNumber"
                type="number"
                value={tasa}
                onChange={(e) => setTasa(Number(e.target.value))}
              />
              <span>$</span>
            </div>
          </label>
        </div>
      )}
      <ul className="ListItem">
        {data[selected.type].map((el: Item) => {
          let symbol: ReactNode | string = <span></span>;
          switch (selected.type) {
            case "EUR":
              symbol = <span className="Symbol EUR"></span>;
              break;
            case "USD":
              symbol = <span className="Symbol USD">$</span>;
              break;
            case "MLC":
              symbol = <span className="Symbol MLC">MLC</span>;
              break;
            case "CUP":
              symbol = <span className="Symbol CUP">CUP</span>;
              break;
          }
          return (
            <li key={el.amount}>
              <div className="pattern"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="content">
                <span className="title">{el.title}</span>
                <span className="amount">
                  {el.amount}
                  {selected.type == "CUP" ? (
                    <span className="Symbol CUP">
                      <span className="EUR"></span>
                      <span className="Small"> en </span> CUP
                    </span>
                  ) : (
                    <span className="Symbol CUP">
                      <span className="EUR"></span>
                    </span>
                  )}
                </span>
              </div>
              <div className="Beneficios">
                <p className="Cost">
                  Coste: <span>{el.cost}</span> <span className="EUR"></span>
                </p>
                <p>
                  Recibe{" "}
                  <span>
                    {selected.type == "CUP"
                      ? el.amount * tasa * 0.8
                      : el.amount}{" "}
                    {selected.type}
                  </span>{" "}
                  en {selected.category}
                </p>
              </div>
              <div className="Actions">
                <a
                  href={`https://api.whatsapp.com/send?text=${el.link}`}
                  target="_blank"
                >
                  Adquirir
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface Category {
  type: string;
  delivery: string;
}
interface Item {
  title: string;
  amount: number;
  link: string;
  cost: number;
}

const eur: Item[] = [
  {
    title: "medium EUR tranfer",
    amount: 50,
    link: "https://buy.stripe.com/fZe2b9gLp20B7Cg9Bg",
    cost: 63,
  },

  {
    title: "high EUR tranfer",
    amount: 100,
    link: "https://buy.stripe.com/9AQ4jhfHlbBb3m06p5",
    cost: 126,
  },

  {
    title: "ultra EUR tranfer",
    amount: 150,
    link: "https://buy.stripe.com/aEUeXV8eT9t3f4I28Q",
    cost: 189,
  },

  {
    title: "ultra EUR tranfer",
    amount: 200,
    link: "https://buy.stripe.com/7sI8zx1QvdJj5u87tb",
    cost: 249,
  },
];

const cup: Item[] = [
  {
    title: "micro CUP tranfer",
    amount: 5,
    link: "https://buy.stripe.com/cN29DBbr5dJj1dS8wN",
    cost: 5,
  },

  {
    title: "micro CUP tranfer",
    amount: 10,
    link: "https://buy.stripe.com/8wM03152H7kVbSw9AI",
    cost: 10,
  },
  {
    title: "small CUP tranfer",

    amount: 25,
    link: "https://buy.stripe.com/bIY6rp1Qv6gRbSw9AP",
    cost: 25,
  },
  {
    title: "small CUP tranfer",

    amount: 30,
    link: "https://buy.stripe.com/aEU3fd52HfRre0EbIW",
    cost: 30,
  },

  {
    title: "small CUP tranfer",

    amount: 40,
    link: "https://buy.stripe.com/9AQ031cv98oZcWAbIV",
    cost: 40,
  },
  {
    title: "medium CUP tranfer",

    amount: 50,
    link: "https://buy.stripe.com/5kA7vtan15cN1dS28o",
    cost: 50,
  },
  {
    title: "medium CUP tranfer",

    amount: 60,
    link: "https://buy.stripe.com/5kA031an1gVv4q45kw",
    cost: 60,
  },
  {
    title: "medium CUP tranfer",

    amount: 70,
    link: "https://buy.stripe.com/6oE1757aPcFf1dSbIT",
    cost: 70,
  },

  {
    title: "medium CUP tranfer",

    amount: 80,
    link: "https://buy.stripe.com/00gaHF0Mr20BcWA6oy",
    cost: 80,
  },
  {
    title: "high CUP tranfer",

    amount: 90,
    link: "https://buy.stripe.com/aEUdTR0Mr48J5u8bIR",
    cost: 90,
  },
  {
    title: "ultra CUP tranfer",

    amount: 150,
    link: "https://buy.stripe.com/aEU3fd52HdJj3m014m",
    cost: 150,
  },
  {
    title: "ultra CUP tranfer",

    amount: 200,
    link: "https://buy.stripe.com/3csbLJan1bBb6yc006",
    cost: 200,
  },

  {
    title: "ultra CUP tranfer",
    amount: 250,
    link: "https://buy.stripe.com/3csdTR3YD48J6yc8wD",
    cost: 250,
  },
];

const mlc: Item[] = [
  {
    title: "micro MLC tranfer",
    amount: 20,
    link: "https://buy.stripe.com/28o1758eTbBb8GkaF8",
    cost: 22.38,
  },
  {
    title: "small MLC tranfer",
    amount: 25,
    link: "https://buy.stripe.com/8wM7vt7aP6gRbSw5kP",
    cost: 27.69,
  },
  {
    title: "small MLC tranfer",
    amount: 30,
    link: "https://buy.stripe.com/eVa2b90MreNn6yccNi",
    cost: 33.39,
  },

  {
    title: "small MLC tranfer",
    amount: 40,
    link: "https://buy.stripe.com/dR6dTRfHlax709OdRn",
    cost: 44.21,
  },
  {
    title: "medium MLC tranfer",
    amount: 50,
    link: "https://buy.stripe.com/eVa8zx0MreNn8Gk5kS",
    cost: 55.19,
  },
  {
    title: "medium MLC tranfer",
    amount: 60,
    link: "https://buy.stripe.com/fZecPN3YDgVvg8M6oX",
    cost: 66.09,
  },
  {
    title: "medium MLC tranfer",
    amount: 70,
    link: "https://buy.stripe.com/aEU7vtcv948JaOscNm",
    cost: 77.13,
  },

  {
    title: "medium MLC tranfer",
    amount: 80,
    link: "https://buy.stripe.com/cN20318eT6gRf4I5kV",
    cost: 87.91,
  },
  {
    title: "high MLC tranfer",
    amount: 90,
    link: "https://buy.stripe.com/7sIeXVbr5gVv8Gk5kW",
    cost: 98.78,
  },
  {
    title: "high MLC tranfer",
    amount: 100,
    link: "https://buy.stripe.com/14k6rp52H20BaOs14H",
    cost: 109.66,
  },

  {
    title: "ultra MLC tranfer",
    amount: 150,
    link: "https://buy.stripe.com/4gwbLJbr520B09O00E",
    cost: 164.11,
  },

  {
    title: "ultra MLC tranfer",
    amount: 200,
    link: "https://buy.stripe.com/28o9DB1Qv0Wx3m07t7",
    cost: 218.66,
  },
];

const usd: Item[] = [
  {
    title: "micro USD tranfer",
    amount: 20,
    link: "https://buy.stripe.com/aEU3fd52HdJjbSweVE",
    cost: 23.5,
  },
  {
    title: "small USD tranfer",
    amount: 30,
    link: "https://buy.stripe.com/5kAcPN3YD0Wxg8M4h1",
    cost: 34.8,
  },

  {
    title: "medium USD tranfer",
    amount: 50,
    link: "https://buy.stripe.com/6oEaHFdzd34FcWA5l6",
    cost: 58,
  },

  {
    title: "high USD tranfer",
    amount: 100,
    link: "https://buy.stripe.com/bIYdTR0MreNncWA3cZ",
    cost: 116,
  },

  {
    title: "ultra USD tranfer",
    amount: 150,
    link: "https://buy.stripe.com/8wM9DBbr5gVve0E4h4",
    cost: 174,
  },

  {
    title: "ultra USD tranfer",
    amount: 200,
    link: "https://buy.stripe.com/5kA7vtan15cN5u8bJx",
    cost: 232,
  },
];

const data: {
  [key: string]: Item[];
  EUR: Item[];
  CUP: Item[];
  MLC: Item[];
  USD: Item[];
} = {
  EUR: eur,
  CUP: cup,
  MLC: mlc,
  USD: usd,
};
