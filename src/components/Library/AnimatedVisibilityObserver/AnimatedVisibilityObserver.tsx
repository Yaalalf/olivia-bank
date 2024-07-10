"use client";

import { init } from "next/dist/compiled/webpack/webpack";
import VisibilityObserver from "../VisibilityObserver/VisibilityObserver";
import "./style/mobile.css";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

export default function AnimatedVisibilityObserver({
  children,
  className,
  classNameObserver,
  animationInit = "slideInSmall",
  animationEnd = "slideOutSmall",
  delay = 0,
  once = false,
}: {
  children: ReactNode;
  className?: string;
  classNameObserver?: string;
  animationInit?: string;
  animationEnd?: string;
  delay?: number;
  once?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationState, setAnimationState] = useState("pending");
  return (
    <div className={`AnimatedVisibilityObserver ${className || ""}`}>
      <div
        className={`AnimatedContainer ${!isVisible && "hidden"} ${
          animationState == "pending"
            ? "pending"
            : animationState == "init"
            ? "init"
            : "end"
        }`}
        style={
          {
            animationDelay: delay + "ms",
            "--animation-init-name": animationInit,
            "--animation-end-name": animationEnd,
          } as CSSProperties
        }
      >
        {children}
      </div>
      <VisibilityObserver
        className={`animated-observer ${classNameObserver || ""}`}
        onVisibility={(entry) => {
          // console.log("Animated", once, entry);

          if (entry.isIntersecting) {
            setIsVisible(true);
            setAnimationState("init");
          } else {
            if (animationState == "init") {
              setAnimationState("end");
              setTimeout(() => {
                setIsVisible(false);
                setAnimationState("pending");
              }, 1000);
            }
          }
        }}
        once={once}
      />
    </div>
  );
}
