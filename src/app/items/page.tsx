"use client";

import Title from "@/components/title/Title";
import TabsPanel from "@/components/tabs/TabsPanel";
import "./desktop.css";
import "./mobile.css";
import { useState } from "react";

export default function Items() {
  const [selected, setSelected] = useState("EUR");

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

      <ul className="ListItem">
        {data[selected].map((el: Item) => (
          <li key={el.amount}>
            <div className="pattern"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="content">
              <span className="title">{el.title}</span>
              <span className="amount">{el.amount}$</span>
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
        ))}
      </ul>
    </div>
  );
}

interface Item {
  title: string;
  amount: number;
  link: string;
}

const eur: Item[] = [
  {
    title: "medium EUR tranfer",

    amount: 50,
    link: "https://buy.stripe.com/fZe2b9gLp20B7Cg9Bg",
  },

  {
    title: "high EUR tranfer",

    amount: 100,
    link: "https://buy.stripe.com/9AQ4jhfHlbBb3m06p5",
  },

  {
    title: "ultra EUR tranfer",

    amount: 150,
    link: "https://buy.stripe.com/aEUeXV8eT9t3f4I28Q",
  },

  {
    title: "ultra EUR tranfer",
    amount: 200,
    link: "https://buy.stripe.com/7sI8zx1QvdJj5u87tb",
  },
];

const cup: Item[] = [
  {
    title: "micro CUP tranfer",
    amount: 5,
    link: "https://buy.stripe.com/cN29DBbr5dJj1dS8wN",
  },

  {
    title: "micro CUP tranfer",
    amount: 10,
    link: "https://buy.stripe.com/8wM03152H7kVbSw9AI",
  },
  {
    title: "small CUP tranfer",

    amount: 25,
    link: "https://buy.stripe.com/bIY6rp1Qv6gRbSw9AP",
  },
  {
    title: "small CUP tranfer",

    amount: 30,
    link: "https://buy.stripe.com/aEU3fd52HfRre0EbIW",
  },

  {
    title: "small CUP tranfer",

    amount: 40,
    link: "https://buy.stripe.com/9AQ031cv98oZcWAbIV",
  },
  {
    title: "medium CUP tranfer",

    amount: 50,
    link: "https://buy.stripe.com/5kA7vtan15cN1dS28o",
  },
  {
    title: "medium CUP tranfer",

    amount: 60,
    link: "https://buy.stripe.com/5kA031an1gVv4q45kw",
  },
  {
    title: "medium CUP tranfer",

    amount: 70,
    link: "https://buy.stripe.com/6oE1757aPcFf1dSbIT",
  },

  {
    title: "medium CUP tranfer",

    amount: 80,
    link: "https://buy.stripe.com/00gaHF0Mr20BcWA6oy",
  },
  {
    title: "high CUP tranfer",

    amount: 90,
    link: "https://buy.stripe.com/aEUdTR0Mr48J5u8bIR",
  },
  {
    title: "ultra CUP tranfer",

    amount: 150,
    link: "https://buy.stripe.com/aEU3fd52HdJj3m014m",
  },
  {
    title: "ultra CUP tranfer",

    amount: 200,
    link: "https://buy.stripe.com/3csbLJan1bBb6yc006",
  },

  {
    title: "ultra CUP tranfer",
    amount: 250,
    link: "https://buy.stripe.com/3csdTR3YD48J6yc8wD",
  },
];

const mlc: Item[] = [
  {
    title: "micro MLC tranfer",
    amount: 20,
    link: "https://buy.stripe.com/28o1758eTbBb8GkaF8",
  },
  {
    title: "small MLC tranfer",

    amount: 25,
    link: "https://buy.stripe.com/8wM7vt7aP6gRbSw5kP",
  },
  {
    title: "small MLC tranfer",

    amount: 30,
    link: "https://buy.stripe.com/eVa2b90MreNn6yccNi",
  },

  {
    title: "small MLC tranfer",

    amount: 40,
    link: "https://buy.stripe.com/dR6dTRfHlax709OdRn",
  },
  {
    title: "medium MLC tranfer",

    amount: 50,
    link: "https://buy.stripe.com/eVa8zx0MreNn8Gk5kS",
  },
  {
    title: "medium MLC tranfer",

    amount: 60,
    link: "https://buy.stripe.com/fZecPN3YDgVvg8M6oX",
  },
  {
    title: "medium MLC tranfer",

    amount: 70,
    link: "https://buy.stripe.com/aEU7vtcv948JaOscNm",
  },

  {
    title: "medium MLC tranfer",

    amount: 80,
    link: "https://buy.stripe.com/cN20318eT6gRf4I5kV",
  },
  {
    title: "high MLC tranfer",

    amount: 90,
    link: "https://buy.stripe.com/7sIeXVbr5gVv8Gk5kW",
  },
  {
    title: "high MLC tranfer",

    amount: 100,
    link: "https://buy.stripe.com/14k6rp52H20BaOs14H",
  },

  {
    title: "ultra MLC tranfer",

    amount: 150,
    link: "https://buy.stripe.com/4gwbLJbr520B09O00E",
  },

  {
    title: "ultra MLC tranfer",
    amount: 200,
    link: "https://buy.stripe.com/28o9DB1Qv0Wx3m07t7",
  },
];

const usd: Item[] = [
  {
    title: "micro USD tranfer",
    amount: 20,
    link: "https://buy.stripe.com/aEU3fd52HdJjbSweVE",
  },
  {
    title: "small USD tranfer",

    amount: 30,
    link: "https://buy.stripe.com/5kAcPN3YD0Wxg8M4h1",
  },

  {
    title: "medium USD tranfer",

    amount: 50,
    link: "https://buy.stripe.com/6oEaHFdzd34FcWA5l6",
  },

  {
    title: "high USD tranfer",

    amount: 100,
    link: "https://buy.stripe.com/bIYdTR0MreNncWA3cZ",
  },

  {
    title: "ultra USD tranfer",

    amount: 150,
    link: "https://buy.stripe.com/8wM9DBbr5gVve0E4h4",
  },

  {
    title: "ultra USD tranfer",
    amount: 200,
    link: "https://buy.stripe.com/5kA7vtan15cN5u8bJx",
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
