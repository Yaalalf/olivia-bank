"use client";

import "./base.css";

import {
  forwardRef,
  MutableRefObject,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export default forwardRef(function YLMenu(
  {
    className,
    children,
    parentElement,
    offset = [0, 0],
    anchor = AnchorPosition.bottom,

    value,
    onChange,
  }: {
    className?: string;
    children?: ReactNode;
    parentElement?: MutableRefObject<HTMLElement | { ref: HTMLElement } | null>;
    offset?: [number, number];
    anchor?: AnchorPosition;

    value?: boolean;
    onChange?: (e: { value: string; icon: string }) => void;
  },
  ref
) {
  const [isMenu, setIsMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const currentBoundingRect = useRef({ x: 0, y: 0 });

  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  let parentElementRef: HTMLElement;

  useEffect(() => {
    if (parentElement) {
      if (parentElement.current) {
        if (parentElement.current instanceof HTMLElement) {
          parentElementRef = parentElement.current;
        } else {
          parentElementRef = parentElement.current.ref;
        }
        parentElementRef.addEventListener("click", onClickMenu);
      }
    } else {
      if (menuRef.current) {
        if (menuRef.current.parentElement) {
          parentElementRef = menuRef.current.parentElement;

          parentElementRef.addEventListener("click", onClickMenu);
        }
      }
    }
    console.log(parentElement, menuRef.current);
  }, [parentElement, menuRef]);

  useImperativeHandle(
    ref,
    () => {
      return {
        close: () => {
          setIsMenu(false);
          setIsVisible(false);
        },
      };
    },
    [setIsMenu, setIsVisible]
  );

  return (
    <div ref={menuRef} className="yl-menu">
      {isMenu &&
        createPortal(
          <div className="yl-menu-container-background">
            <div
              className="yl-menu-close-area"
              onClick={(e) => onCloseMenu(e)}
            ></div>
            <div
              ref={menuContainerRef}
              className={`yl-menu-container ${className || ""} ${
                isVisible ? "visible" : ""
              }`}
              style={{
                top: currentBoundingRect.current.y,
                left: currentBoundingRect.current.x,
              }}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </div>
  );

  function onClickMenu(e: MouseEvent) {
    e.stopPropagation();

    if (parentElementRef) {
      switch (anchor) {
        case AnchorPosition.top:
          setTimeout(() => {
            console.log("entre aca");
            const { x, y, height } = parentElementRef.getBoundingClientRect();

            console.log(x, y, height, menuContainerRef.current);

            const menuHeight = menuContainerRef.current?.getBoundingClientRect()
              .height as number;

            currentBoundingRect.current.x = x + offset[0];
            currentBoundingRect.current.y = y - menuHeight + offset[1];

            setIsVisible(true);
          }, 10);

          break;

        case AnchorPosition.bottom:
          setTimeout(() => {
            console.log("entre aca");
            const { x, y, height } = parentElementRef.getBoundingClientRect();

            console.log(x, y, height, menuContainerRef.current);

            const menuHeight = menuContainerRef.current?.getBoundingClientRect()
              .height as number;

            currentBoundingRect.current.x = x + offset[0];
            currentBoundingRect.current.y = y + height + menuHeight + offset[1];

            setIsVisible(true);
          }, 10);

          break;
      }

      setIsMenu(true);
    }
  }

  function onCloseMenu(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    setTimeout(() => {
      setIsMenu(false);
      setIsVisible(false);
    }, 100);
  }
});

export enum AnchorPosition {
  top = "top",
  bottom = "bottom",
}
