import { createBrowserRouter } from "react-router-dom";
import { Screen404 } from "../views/Screen404/Screen404";
import { LoginView } from "../views/LoginView/LoginView";
import { RegisterView } from "../views/RegisterView/RegisterView";
import { MenuPanelView } from "../views/MenuPanelView/MenuPanelView";
import { LearningView } from "../views/LearningView/LearningView";
import { LearningModelView } from "../views/LearningModelView/LearningModelView";
import { ExpertView } from "../views/ExpertView/ExpertView";
import { SeetingsView } from "../views/SeetingsView/SeetingsView";
import { BadAnswerView } from "../views/BadAnswerView/BadAnswerView";
import { ProfilView } from "../views/ProfilView/ProfilView";

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
  {
    path: "/learning-model",
    element: <LearningModelView />,
  },
  {
    path: "/expert",
    element: <ExpertView />,
  },
  {
    path: "/seetings",
    element: <SeetingsView />,
  },
  {
    path: "/bad-answer",
    element: <BadAnswerView />,
  },
  {
    path: "/profil",
    element: <ProfilView />,
  },
]);
