"use client";

import { useEffect, useRef, useState } from "react";
import "./style/desktop.css";
import "./style/mobile.css";
import { createPortal } from "react-dom";

export default function Select({
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

  const currentBoundingRect = useRef({ x: 0, y: 0, width: 0 });

  const selectRef = useRef<HTMLDivElement>(null);
  const selectMenuRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`select ${className} `}
      ref={selectRef}
      onClick={onClickMenu}
    >
      <div className="select_input">
        <span className="select_input_value">{value.value}</span>
        <span
          className={`select_drop_menu_icon ${isMenu ? "clicked-state" : ""}`}
        ></span>
      </div>
      {isMenu && <SelectMenu />}
    </div>
  );

  function onClickMenu(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    if (selectRef.current) {
      const { x, y, height, width } = selectRef.current.getBoundingClientRect();

      currentBoundingRect.current.width = width;
      currentBoundingRect.current.x = x + window.scrollX;
      currentBoundingRect.current.y = y + window.scrollY + height;
    }
    setIsMenu(true);
  }

  function onCloseMenu(
    e: React.MouseEvent<HTMLElement>,
    el: { value: string; icon: string }
  ) {
    e.stopPropagation();
    if (selectMenuRef.current)
      selectMenuRef.current.style.animationName = "scaleOut";

    setTimeout(() => {
      setIsMenu(false);
      onChange(el);
    }, 100);
  }

  function SelectMenu() {
    return createPortal(
      <div className="menu_select_container">
        <div
          className="menu_select_close_area"
          onClick={(e) => onCloseMenu(e, value)}
        ></div>
        <div
          ref={selectMenuRef}
          className="menu_select"
          style={{
            top: currentBoundingRect.current.y,
            left: currentBoundingRect.current.x,
            width: currentBoundingRect.current.width,
          }}
        >
          <ul>
            {options.map((el) => (
              <li
                className={`select_menu_item ${
                  value.value == el.value ? " selected_menu_item" : ""
                }`}
                key={el.value}
                onClick={(e) => {
                  onCloseMenu(e, el);
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
      </div>,
      document.body
    );
  }
}
