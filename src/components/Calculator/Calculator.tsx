"use client";

import { useEffect, useState } from "react";
import InputNumber from "../InputNumber/InputNumber";
import Select from "../Select/Select";
import "./style/desktop.css";
import "./style/mobile.css";
import YLSelect from "../Library/yl-select/yl-select";

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

  const [sendValue, setSendValue] = useState(100);
  const [isSendValue, setIsSendValue] = useState(true);

  const [receivValue, setReceivValue] = useState(40000);
  const [isReceivValue, setIsReceivValue] = useState(false);

  const [selectSendValue, setSelectSendValue] = useState(selectSendOptions[0]);
  const [selectReceivValue, setSelectReceivValue] = useState(
    selectReceivOptions[2]
  );

  const [currentChange, setCurrentChange] = useState(400);

  useEffect(() => {
    if (isSendValue) {
      setReceivValue(Number((sendValue * currentChange).toFixed(2)));
    }
  }, [sendValue, isSendValue, currentChange]);
  useEffect(() => {
    if (isReceivValue) {
      setSendValue(Number((receivValue / currentChange).toFixed(2)));
    }
  }, [receivValue, isReceivValue, currentChange]);

  useEffect(() => {
    console.log("me active", selectReceivValue.value);

    switch (selectReceivValue.value) {
      case "CUP":
        switch (selectSendValue.value) {
          case "EUR":
            setCurrentChange(450);
            break;

          case "USD":
            setCurrentChange(400);
            break;
        }
        break;
      case "USD":
        switch (selectSendValue.value) {
          case "EUR":
            setCurrentChange(1.1);
            break;

          case "USD":
            setCurrentChange(0.9);
            break;
        }
        break;
      case "MLC":
        switch (selectSendValue.value) {
          case "EUR":
            setCurrentChange(1.0);
            break;

          case "USD":
            setCurrentChange(0.7);
            break;
        }
        break;
      case "EUR":
        switch (selectSendValue.value) {
          case "EUR":
            setCurrentChange(0.9);
            break;

          case "USD":
            setCurrentChange(0.6);
            break;
        }
        break;
    }
  }, [selectReceivValue, selectSendValue]);

  return (
    <div className="CalculatorContainer">
      <div className="Calculator">
        <div className="MockupDecoration Blur"></div>
        <div className="MockupDecoration"></div>

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

          <p>Escriba la cantidad a enviar o a recibir</p>

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
                  <YLSelect
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
                  <YLSelect
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
              su remitente recibira{" "}
              <span>
                {receivValue} {selectReceivValue.value}
              </span>
              ,{" "}
              {`en ${
                selectReceivValue.value == "MLC"
                  ? "su tarjeta al instante"
                  : selectReceivValue.value == "CUP"
                  ? "su tarjeta al instante" +
                    " o en efectivo en menos de 24 horas"
                  : "efectivo en menos de 24 horas"
              }`}
            </p>

            <button>Realizar Envio</button>
          </div>

          <div className="DecorationContainer">
            <div className="Decoration"></div>
            <div className="Decoration"></div>
            <div className="Decoration"></div>
            <div className="Decoration"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
