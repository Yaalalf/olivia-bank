"use client";

import { forwardRef, ReactNode, useEffect, useState } from "react";
import "./base.css";
import VisibilityObserver from "../VisibilityObserver/VisibilityObserver";
import { usePathname } from "next/navigation";

export default forwardRef(function YLHeader(
  {
    isMobileFirst = false,
    className,
    desktop,
    mobile,
    onIsHero,
    root = false,
  }: {
    isMobileFirst?: boolean;
    className?: string;
    desktop: ReactNode;
    mobile: ReactNode;
    root?: boolean;
    onIsHero?: (isHero: boolean) => void;
  },
  ref
) {
  const pathName = usePathname();

  const [isHero, setIsHero] = useState(root ? pathName === "/" : true);
  const [isMobile, setIsMobile] = useState(isMobileFirst);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    window.addEventListener("resize", () => {
      console.log("resize");
      setIsMobile(window.innerWidth < 1024);
    });
  }, []);

  useEffect(() => {
    if (root) {
      setIsHero(pathName === "/");
      onIsHero && onIsHero(pathName === "/");
    }
  }, [pathName]);

  return (
    <>
      <header
        className={`yl-header ${className || ""} ${
          isMobile ? "mobile_platform" : "desktop_platform"
        } ${isHero ? "hero_state" : ""}`}
      >
        {isMobile ? mobile : desktop}
      </header>
      <VisibilityObserver
        className="visibility_position"
        onVisibility={(entry) => {
          if (root && pathName !== "/") {
            setIsHero(false);
            onIsHero && onIsHero(false);
          } else {
            setIsHero(entry.isIntersecting);
            onIsHero && onIsHero(entry.isIntersecting);
          }
        }}
      />
    </>
  );
});
