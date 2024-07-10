import { MouseEvent } from "react";

import "./style/mobile.css";

export default function IconedButton({
  icon,
  onClick,
  className,
}: {
  icon: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className={`iconed_button ${className || ""}`}
      type="button"
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      <span className="icon" style={{ maskImage: `url(${icon})` }}></span>
    </button>
  );
}
