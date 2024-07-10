import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { createPortal } from "react-dom";
import YLNotification from "./yl-notification";

const NotificationContext = createContext<INotification | null>(null);

const NotificationDispatchContext =
  createContext<Dispatch<NotificationActions> | null>(null);

export default function YLNotificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [notification, dispatch] = useReducer(NotificationReducer, {
    message: "",
    notificationType: "",
    isNotify: false,
  });

  return (
    <NotificationContext.Provider value={notification}>
      <NotificationDispatchContext.Provider value={dispatch}>
        {children}
        {notification?.isNotify && <YLNotification />}
      </NotificationDispatchContext.Provider>
    </NotificationContext.Provider>
  );
}

export function useYLNotify() {
  const notificationDispatchContext = useContext(NotificationDispatchContext);
  const notification = useContext(NotificationContext);
  return {
    notification,
    notify: function ({
      message,
      notificationType,
    }: {
      message: string;
      notificationType: string;
    }) {
      notificationDispatchContext &&
        notificationDispatchContext({
          type: NotificationActionsType.notify,
          message: message,
          notificationType: notificationType,
        });
    },
  };
}

export function useYLNotificationContext() {
  return useContext(NotificationContext);
}

export function useYLNotificationDispatchContext() {
  return useContext(NotificationDispatchContext);
}

function NotificationReducer(
  state: INotification,
  action: NotificationActions
) {
  console.log(state);

  switch (action.type) {
    case NotificationActionsType.notify:
      return {
        ...state,
        message: action.message,
        notificationType: action.notificationType,
        isNotify: true,
      };
    case NotificationActionsType.close:
      return {
        ...state,
        isNotify: action.isNotify,
      };
  }
}

export type NotificationActions =
  | {
      type: NotificationActionsType.notify;
      message: string;
      notificationType: string;
    }
  | {
      type: NotificationActionsType.close;
      isNotify: boolean;
    };

export enum NotificationActionsType {
  notify = "notify",
  close = "close",
}

interface INotification {
  message: string;
  notificationType: string;
  isNotify: boolean;
}
