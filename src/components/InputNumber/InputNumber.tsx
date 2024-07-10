"use client";

import { ReactNode } from "react";
import "./style/desktop.css";
import "./style/mobile.css";

export default function InputNumber({
  value,
  setValue,
  onPreviousChange,
  className,
  label,
  posfix,
  prefix,
}: {
  value: number;
  setValue: (value: number) => void;
  onPreviousChange?: () => void;
  className?: string;
  label: string;
  posfix?: ReactNode;
  prefix?: ReactNode;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onPreviousChange) onPreviousChange();
    setValue(Number(e.target.value.replace(/^(0+)/g, "")));
  }

  return (
    <div className={`input_standard ${className}`}>
      <label className="input_standard_container">
        <span className="input_standard_prefix">{prefix}</span>
        <div className="input_standard_body">
          <p className="input_standard_label">{label}</p>{" "}
          <input
            value={value}
            onChange={handleChange}
            className="input"
            type="number"
            min={0}
          />
        </div>

        <span className="input_standard_posfix">{posfix}</span>
      </label>
    </div>
  );
}
