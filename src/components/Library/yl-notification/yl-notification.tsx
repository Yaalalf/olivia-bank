"use client";
import { createPortal } from "react-dom";
import "./base.css";
import { useEffect, useState } from "react";
import {
  NotificationActionsType,
  useYLNotificationContext,
  useYLNotificationDispatchContext,
} from "./yl-notification-context";
import YLAnimatedContainer from "../yl-animated-container/yl-animated-container";
import YLIcon from "../yl-icon/yl-icon";
import YlIcon from "../yl-icon";

export default function YLNotification() {
  const notificationContext = useYLNotificationContext();
  const notificationDispatchContext = useYLNotificationDispatchContext();

  const [state, setState] = useState("init");

  useEffect(() => {
    if (state == "init") {
      setTimeout(() => {
        setState("end");
        setTimeout(() => {
          notificationDispatchContext &&
            notificationDispatchContext({
              type: NotificationActionsType.close,
              isNotify: false,
            });
        }, 1000);
      }, 1500);
    }
  }, [state]);

  const portal = createPortal(
    <div className="yl-notification">
      <YLAnimatedContainer className="" state={state}>
        <div className="yl-notification-container">
          <YlIcon icon="/shopping-bag-icon.svg" />
          <span className="yl-span">{notificationContext?.message}</span>
        </div>
      </YLAnimatedContainer>
    </div>,
    document.body
  );
  useEffect(() => {
    console.log("cambie el notify", notificationContext?.isNotify);

    // notificationContext?.isNotify &&
    //   setTimeout(() => {
    //     notificationDispatchContext &&
    //       notificationDispatchContext({
    //         type: NotificationActionsType.close,
    //         isNotify: false,
    //       });
    //   }, 1000);
  }, [notificationContext?.isNotify]);

  return <>{portal}</>;
}
