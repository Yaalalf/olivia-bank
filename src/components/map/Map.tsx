"useClient";

import { useEffect, useRef, useState } from "react";
import "./style/desktop.css";
import PathEffect, { IPath, IPoint } from "./PathEffect";

const POSITION_CUBA: IPoint = { x: 110, y: 380 };
const PositionsData = [
  {
    init: { x: 400, y: 270 },
    end: POSITION_CUBA,
  },
  // {
  //   init: { x: 420, y: 296 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 400, y: 296 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 400, y: 346 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 480, y: 526 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 200, y: 190 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 90, y: 180 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 90, y: 240 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 50, y: 260 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 50, y: 220 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 60, y: 340 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 160, y: 440 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 240, y: 500 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 200, y: 540 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 200, y: 480 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 200, y: 400 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 500, y: 390 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 860, y: 505 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 820, y: 490 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 720, y: 320 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 700, y: 300 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 600, y: 310 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 610, y: 110 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 700, y: 140 },
  //   end: POSITION_CUBA,
  // },
  // {
  //   init: { x: 640, y: 180 },
  //   end: POSITION_CUBA,
  // },
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

    // const intervalId = setInterval(() => {
    //   addPosition();
    //   setPaths([...usedPositions.current]);
    // }, 1000);
    // return () => {
    //   clearInterval(intervalId);
    // };
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
