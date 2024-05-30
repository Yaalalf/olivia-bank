"use client";

import { useEffect, useRef, useState } from "react";
import "./style/desktop.css";
import PathEffect, { IPath, IPoint } from "./PathEffect";

const POSITION_CUBA: IPoint = { x: 112, y: 380 };
const PositionsData = [
  {
    _id: "spain",
    init: { x: 312, y: 326 },
    end: POSITION_CUBA,
  },
  {
    _id: "portugal",
    init: { x: 300, y: 326 },
    end: POSITION_CUBA,
  },
  {
    _id: "italy",
    init: { x: 355, y: 330 },
    end: POSITION_CUBA,
  },
  {
    _id: "england",
    init: { x: 305, y: 280 },
    end: POSITION_CUBA,
  },
  {
    _id: "france",
    init: { x: 330, y: 290 },
    end: POSITION_CUBA,
  },
  {
    _id: "suecia",
    init: { x: 355, y: 260 },
    end: POSITION_CUBA,
  },
  {
    _id: "canada_north",
    init: { x: 25, y: 260 },
    end: POSITION_CUBA,
  },
  {
    _id: "canada_west",
    init: { x: 85, y: 280 },
    end: POSITION_CUBA,
  },

  {
    _id: "us_north",
    init: { x: 75, y: 340 },
    end: POSITION_CUBA,
  },
  {
    _id: "us_south",
    init: { x: 45, y: 320 },
    end: POSITION_CUBA,
  },
  {
    _id: "mexico_north",
    init: { x: 45, y: 360 },
    end: POSITION_CUBA,
  },
  {
    _id: "mexico_south",
    init: { x: 55, y: 390 },
    end: POSITION_CUBA,
  },
  {
    _id: "colombia",
    init: { x: 140, y: 420 },
    end: POSITION_CUBA,
  },
  {
    _id: "panama",
    init: { x: 144, y: 490 },
    end: POSITION_CUBA,
  },
  {
    _id: "brasil",
    init: { x: 174, y: 460 },
    end: POSITION_CUBA,
  },
  {
    _id: "argentina",
    init: { x: 168, y: 560 },
    end: POSITION_CUBA,
  },
];
export default function Map() {
  const [paths, setPaths] = useState<IPath[]>([]);
  const usedPositions = useRef<IPath[]>([]);
  const unusedPositions = useRef<IPath[]>([]);

  function addPosition() {
    let index = Number(Math.floor(Math.random() * PositionsData.length));

    if (!usedPositions.current.includes(PositionsData[index])) {
      usedPositions.current.push(PositionsData[index]);
    } else {
      addPosition();
    }
  }

  useEffect(() => {
    setPaths([...PositionsData]);

    const intervalId = setInterval(() => {
      addPosition();
      setPaths([...usedPositions.current]);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const PathComponents = paths.map((el) => {
    return (
      <PathEffect
        key={el.init.x + " " + el.init.y}
        delay="0s"
        path={calculateVezier({
          init: { x: el.init.x, y: el.init.y },
          end: POSITION_CUBA,
        })}
        onFinishPath={() => {
          usedPositions.current = usedPositions.current.filter((element) => {
            return !(
              element.init.x == el.init.x && element.init.y == el.init.y
            );
          });

          setPaths([...usedPositions.current]);
        }}
      />
    );
  });

  return (
    <div className="MapContainer">
      <div className="Map"></div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="OutCircle"
          cx="16%"
          cy="54.5%"
          r="20"
          stroke="#000000aa"
          fill="transparent"
          strokeWidth="4"
        ></circle>
        <circle cx="16%" cy="54.5%" r="10" fill="#957049" />

        {PathComponents}
      </svg>
    </div>
  );
}

function calculateVezier(path: IPath): IPath {
  const newPath: IPath = {
    init: { x: path.init.x, y: path.init.y },
    firstVezier: { x: POINT_CERO.x, y: POINT_CERO.y },
    secondVezier: { x: POINT_CERO.x, y: POINT_CERO.y },
    end: { x: path.end.x, y: path.end.y },
  };

  if (newPath.firstVezier && newPath.secondVezier) {
    newPath.firstVezier.x =
      path.init.x + Math.abs(path.init.x - path.end.x) / 4;
    newPath.secondVezier.x =
      path.end.x - Math.abs(path.init.x - path.end.x) / 4;

    newPath.firstVezier.y =
      path.init.y - Math.abs(path.init.y - path.end.y) / 4 - 50;
    newPath.secondVezier.y =
      path.end.y - Math.abs(path.init.y - path.end.y) / 4 - 50;
  }
  return newPath;
}
export const POINT_CERO = { x: 0, y: 0 };
