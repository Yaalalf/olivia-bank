import { MutableRefObject, useEffect } from "react";

export default function useRipple<T extends HTMLElement>(
  rippleTrigger: MutableRefObject<T | null>,
  rippleHandler: MutableRefObject<T | null>
) {
  useEffect(() => {
    rippleTrigger.current &&
      rippleTrigger.current.addEventListener("click", ripple);

    return () => {
      rippleTrigger.current &&
        rippleTrigger.current.removeEventListener("click", ripple);
    };
  }, [rippleTrigger.current]);

  function ripple(e: MouseEvent) {
    if (rippleHandler.current) {
      const { height, width, x, y } =
        rippleHandler.current.getBoundingClientRect();

      let posX = x;
      let posY = y;
      let buttonWidth = width;
      let buttonHeight = height;

      // Add the element
      let ripple = document.createElement("span");

      rippleHandler.current.appendChild(ripple);
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

      ripple.classList.add("yl-ripple-animation");

      setTimeout(() => {
        rippleHandler.current && rippleHandler.current.removeChild(ripple);
      }, 1000);
    }
  }
}
