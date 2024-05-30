"useClient";

import "./PathEffect.css";
import { useEffect, useRef, useState } from "react";

export default function PathEffect({
  delay,
  path,
  onFinishPath,
}: {
  delay: string;
  path: IPath;
  onFinishPath: () => void;
}) {
  const [currentPath, setPath] = useState(path);
  const [currentDelay, setDelay] = useState(delay);

  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (ref.current) {
      let length = ref.current.getTotalLength();
      ref.current.style.setProperty("--stroke-max-length", length.toString());
      ref.current.style.setProperty("--delay", currentDelay);

      ref.current.getBoundingClientRect();
      ref.current.classList.add("animated");

      initEventListener();
    }
  });

  function initEventListener() {
    if (ref.current) {
      ref.current.addEventListener("animationend", (event) => {
        if (event.animationName == "dash" && ref.current != null) {
          ref.current.style.animationName = "dashExit";
          ref.current.style.animationDelay = "0s";
          setDelay("0s");
          setPath({
            init: currentPath.end,
            end: currentPath.init,
            firstVezier: currentPath.secondVezier,
            secondVezier: currentPath.firstVezier,
          });
        }
      });

      ref.current.addEventListener("animationend", (event) => {
        if (event.animationName == "dashExit") {
          onFinishPath();
        }
      });
    }
  }

  return (
    <g className="PathEffectContainer">
      <circle
        className="Target pulse-20"
        cx={path.init.x}
        cy={path.init.y}
        r="10"
        stroke="#000000aa"
        fill="transparent"
        strokeWidth="2"
      ></circle>
      <circle
        className="Target pulse-40"
        cx={path.init.x}
        cy={path.init.y}
        r="30"
        stroke="#000000aa"
        fill="transparent"
        strokeWidth="3"
        strokeDasharray={20}
      ></circle>
      <circle
        className="PositionMarker"
        cx={path.init.x}
        cy={path.init.y}
        r="8"
        fill="#555"
      />

      <path
        ref={ref}
        className="Path"
        d={
          "M " +
          currentPath.init.x +
          " " +
          currentPath.init.y +
          " C " +
          currentPath.firstVezier?.x +
          " " +
          currentPath.firstVezier?.y +
          "," +
          currentPath.secondVezier?.x +
          " " +
          currentPath.secondVezier?.y +
          "," +
          currentPath.end.x +
          " " +
          currentPath.end.y
        }
        stroke="black"
        strokeLinecap="round"
        strokeWidth="4"
        fill="transparent"
      />
    </g>
  );
}

export interface IPath {
  init: IPoint;
  firstVezier?: IPoint;
  secondVezier?: IPoint;
  end: IPoint;
}
export interface IPoint {
  x: number;
  y: number;
}
