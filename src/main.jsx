import ReactDOM from "react-dom/client";
import App from "./pages/home.jsx";
import './styles/necolas.github.io_normalize.css_8.0.1_normalize.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

const routes = createBrowserRouter([{ path: "/", element: <App/> }]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
