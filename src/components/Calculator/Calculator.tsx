"use client";

import { useEffect, useState } from "react";
import InputNumber from "../InputNumber/InputNumber";
import Select from "../Select/Select";
import "./style/desktop.css";
import "./style/mobile.css";

export default function Calculator() {
  const selectSendOptions = [
    { value: "USD", icon: "/icons/dolar.svg" },
    { value: "EUR", icon: "/icons/euro.svg" },
  ];

  const selectReceivOptions = [
    { value: "USD", icon: "/icons/dolar.svg" },
    { value: "EUR", icon: "/icons/euro.svg" },
    { value: "CUP", icon: "/icons/dolar.svg" },
    { value: "MLC", icon: "/icons/dolar.svg" },
  ];

  const [sendValue, setSendValue] = useState(0);
  const [isSendValue, setIsSendValue] = useState(false);

  const [receivValue, setReceivValue] = useState(0);
  const [isReceivValue, setIsReceivValue] = useState(false);

  const [selectSendValue, setSelectSendValue] = useState(selectSendOptions[0]);
  const [selectReceivValue, setSelectReceivValue] = useState(
    selectSendOptions[0]
  );

  useEffect(() => {
    if (isSendValue) {
      setReceivValue(Number((sendValue * 190).toFixed(2)));
    }
  }, [sendValue, isSendValue]);
  useEffect(() => {
    if (isReceivValue) {
      setSendValue(Number((receivValue / 190).toFixed(2)));
    }
  }, [receivValue, isReceivValue]);

  return (
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
          </div>

          <div className="Inputs">
            <div className="InputContainer">
              <div className="Decoration"></div>
              <InputNumber
                value={sendValue}
                setValue={setSendValue}
                className="Input"
                label="Cantidad a Enviar"
                prefix={
                  <span
                    className="prefix_icon"
                    style={{ maskImage: `url("${selectSendValue.icon}")` }}
                  ></span>
                }
                posfix={
                  <Select
                    className="Select"
                    value={selectSendValue}
                    onChange={setSelectSendValue}
                    options={selectSendOptions}
                  />
                }
                onPreviousChange={() => {
                  setIsSendValue(true);
                  setIsReceivValue(false);
                }}
              />
            </div>

            <div className="InputContainer">
              <div className="Decoration"></div>
              <InputNumber
                value={receivValue}
                setValue={setReceivValue}
                className="Input"
                label="Cantidad a Recibir"
                prefix={
                  <span
                    className="prefix_icon"
                    style={{ maskImage: `url("${selectReceivValue.icon}")` }}
                  ></span>
                }
                posfix={
                  <Select
                    className="Select"
                    value={selectReceivValue}
                    onChange={setSelectReceivValue}
                    options={selectReceivOptions}
                  />
                }
                onPreviousChange={() => {
                  setIsSendValue(false);
                  setIsReceivValue(true);
                }}
              />
            </div>
          </div>
          <div className="Result">
            <div className="Decoration"></div>
            <p>
              Si envias{" "}
              <span>
                {sendValue} {selectSendValue.value}
              </span>{" "}
              su remitente recibira
              <span>
                {receivValue} {selectReceivValue.value}, en su tarjeta al
                instante
              </span>
            </p>

            <button>Realizar Envio</button>
          </div>
        </div>
      </div>
    </div>
  );
}
