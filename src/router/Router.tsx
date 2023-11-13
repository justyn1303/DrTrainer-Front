import { createBrowserRouter } from "react-router-dom";
import { Screen404 } from "../views/Screen404/Screen404";
import { LoginView } from "../views/LoginView/LoginView";
import { RegisterView } from "../views/RegisterView/RegisterView";
import { MenuPanelView } from "../views/MenuPanelView/MenuPanelView";
import { LearningView } from "../views/LearningView/LearningView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginView />,
    errorElement: <Screen404 />,
  },
  {
    path: "/nie-znaleziono-strony",
    element: <Screen404 />,
  },
  {
    path: "/register",
    element: <RegisterView />,
  },
  {
    path: "/menu",
    element: <MenuPanelView />,
  },
  {
    path: "/learning",
    element: <LearningView />,
  },
]);
