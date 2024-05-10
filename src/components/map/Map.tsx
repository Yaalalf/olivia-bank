"useClient";

import { useEffect, useRef } from "react";
import "./style/desktop.css";
import { init } from "next/dist/compiled/webpack/webpack";
export default function Map() {
  //   useEffect(() => {
  //     var path = document.querySelector(".Path") as HTMLElement;
  //     var path2 = document.querySelector(".Path2") as HTMLElement;

  //     var length = path.getTotalLength();
  //     path.style.setProperty("--stroke-max-length", length);
  //     path.getBoundingClientRect();
  //     path.classList.add("animated");

  //     var length2 = path2.getTotalLength();
  //     path2.style.setProperty("--stroke-max-length", length2);
  //     path2.getBoundingClientRect();
  //     path2.classList.add("animated");
  //   });

  return (
    <div className="Map">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="OutCircle"
          cx="16%"
          cy="57%"
          r="20"
          stroke="#000000aa"
          fill="transparent"
          strokeWidth="4"
        ></circle>
        <circle cx="16%" cy="57%" r="10" fill="#2f5a2388" />
        <Path
          delay="0s"
          path={{
            init: [400, 270],
            firstVezier: [300, 200],
            secondVezier: [200, 200],
            end: [145, 340],
          }}
        />

        <Path
          delay="1s"
          path={{
            init: [500, 240],
            firstVezier: [400, 200],
            secondVezier: [300, 200],
            end: [145, 340],
          }}
        />

        <Path
          delay="1.5s"
          path={{
            init: [100, 300],
            firstVezier: [120, 310],
            secondVezier: [130, 320],
            end: [145, 340],
          }}
        />
      </svg>
    </div>
  );
}

function Path({
  delay,
  path,
}: {
  delay: string;
  path: {
    init: [number, number];
    firstVezier: [number, number];
    secondVezier: [number, number];
    end: [number, number];
  };
}) {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);

    let length = ref.current.getTotalLength();
    ref.current.style.setProperty("--stroke-max-length", length);
    ref.current.style.setProperty("--delay", delay);

    ref.current.getBoundingClientRect();
    ref.current.classList.add("animated");
  });

  return (
    <path
      ref={ref}
      className="Path"
      d={`M ${path.init[0]} ${path.init[1]} C ${path.firstVezier[0]} ${path.firstVezier[1]}, ${path.secondVezier[0]} ${path.secondVezier[1]}, ${path.end[0]} ${path.end[1]}`}
      stroke="black"
      strokeLinecap="round"
      strokeWidth="5"
      fill="transparent"
    />
  );
}
