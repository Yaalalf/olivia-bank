"use client";

import { useRef, useState } from "react";
import "./base.css";
import { createPortal } from "react-dom";
import useRipple from "../hooks/use-ripple";
import YLMenu from "../yl-menu";

export default function YLSelect({
  className,
  value,
  onChange,
  options,
}: {
  className?: string;
  value: { value: string; icon: string };
  onChange: (e: { value: string; icon: string }) => void;
  options: { value: string; icon: string }[];
}) {
  const [isMenu, setIsMenu] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);
  const selectMenuRef = useRef<{ close: () => void }>(null);

  useRipple(selectRef, selectRef);

  return (
    <div className={`yl-select ${className} `} ref={selectRef}>
      <div className="select_input">
        <span className="select_input_value">{value.value}</span>
        <span
          className={`select_drop_menu_icon ${isMenu ? "clicked-state" : ""}`}
        ></span>
      </div>
      <YLMenu ref={selectMenuRef}>
        <div className="yl-menu-select">
          <ul>
            {options.map((el) => (
              <li
                className={`select_menu_item ${
                  value.value == el.value ? " selected_menu_item" : ""
                }`}
                key={el.value}
                onClick={(e) => {
                  onChange(el);
                  selectMenuRef.current?.close();
                }}
              >
                {el.value}{" "}
                <span
                  className="select_menu_item_icon"
                  style={{ maskImage: `url("${el.icon}")` }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </YLMenu>
    </div>
  );
}
