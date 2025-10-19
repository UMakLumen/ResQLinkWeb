import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.tsx";
import "./index.css";
import TermsAndConditions from "./pages/terms-and-conditions.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/terms-and-conditions/",
    element: <TermsAndConditions />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
