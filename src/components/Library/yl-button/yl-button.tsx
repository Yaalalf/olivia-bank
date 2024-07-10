"use client";

import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./base.css";

export default forwardRef(function YLButton(
  {
    children,
    className,
    delay,
    onClick,
    autoload = false,
  }: {
    delay?: boolean;
    autoload?: boolean;
    className?: string;
    children?: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  },
  ref
) {
  const [loading, setLoading] = useState(false);
  const ylButtonContainerRef = useRef<HTMLDivElement>(null);
  const ylButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ylButtonRef.current &&
      ylButtonRef.current.addEventListener("click", ripple);

    return () => {
      ylButtonRef.current &&
        ylButtonRef.current.removeEventListener("click", ripple);
    };
  }, [ylButtonRef.current]);

  useImperativeHandle(
    ref,
    () => {
      return {
        ref: ylButtonContainerRef.current,
      };
    },
    []
  );

  return (
    <div
      ref={ylButtonContainerRef}
      className={`yl-button ${className ? className : "yl-button-base"}`}
    >
      {!loading ? (
        <button
          ref={ylButtonRef}
          className="yl-button-action"
          onClick={(e) => {
            autoload && setLoading(true);

            if (delay) {
              setTimeout(() => {
                onClick && onClick(e);
                autoload && setLoading(false);
              }, 2000);
            } else {
              onClick && onClick(e);
              autoload && setLoading(false);
            }
          }}
        >
          {children}
        </button>
      ) : (
        <span className="yl-button-loader"></span>
      )}
    </div>
  );

  function ripple(e: MouseEvent) {
    if (ylButtonContainerRef.current) {
      const { height, width, x, y } =
        ylButtonContainerRef.current.getBoundingClientRect();

      let posX = x;
      let posY = y;
      let buttonWidth = width;
      let buttonHeight = height;

      // Add the element
      let ripple = document.createElement("span");

      ylButtonContainerRef.current.appendChild(ripple);
      ripple.classList.add("yl-ripple");

      // Make it round!
      if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
      } else {
        buttonWidth = buttonHeight;
      }

      // Get the center of the element
      var rippleX = e.clientX - posX - buttonWidth / 2;
      var rippleY = e.clientY - posY - buttonHeight / 2;

      ripple.style.width = `${buttonWidth}px`;
      ripple.style.height = `${buttonHeight}px`;
      ripple.style.top = `${rippleY}px`;
      ripple.style.left = `${rippleX}px`;

      ripple.classList.add("rippleAnimation");

      setTimeout(() => {
        ylButtonContainerRef.current &&
          ylButtonContainerRef.current.removeChild(ripple);
      }, 1000);
    }
  }
});
