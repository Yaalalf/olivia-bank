"use client";

import { ReactNode, useEffect, useState } from "react";
import "./style/desktop.css";
import VisibilityObserver from "../VisibilityObserver/VisibilityObserver";
import { usePathname } from "next/navigation";

export default function HeaderSection({
  className,
  desktop,
  mobile,
}: {
  className?: string;
  desktop: ReactNode;
  mobile: ReactNode;
}) {
  const pathName = usePathname();

  const [isHero, setIsHero] = useState(pathName === "/");
  const [isMobile, setIsMobile] = useState(window.screen.width < 1024);
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("resize");
      setIsMobile(window.screen.width < 1024);
    });
  }, []);

  return (
    <>
      <header
        className={`header_container ${className || ""} ${
          isMobile ? "mobile_platform" : "desktop_platform"
        } ${isHero ? "hero_state" : ""}`}
      >
        {isMobile ? mobile : desktop}
      </header>
      <VisibilityObserver
        className="visibility_position"
        onVisibility={(entry) => {
          if (pathName === "/") {
            setIsHero(entry.isIntersecting);
          }
        }}
      />
    </>
  );
}
