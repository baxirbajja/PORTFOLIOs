import React from "react";
import ReactDOM from "react-dom/client";
import Who from "./Components/Who";
import Home from "./Components/Home";
import Works from "./Components/works";
import App from "./App";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Works2 from "./Components/works-2";
import Works3 from "./Components/works-3";
import Contact from "./Components/contact";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Who", element: <Who /> },
  { path: "/home", element: <Home /> },
  { path: "/works", element: <Works /> },
  { path: "/works-2", element: <Works2 /> },
  { path: "/works-3", element: <Works3 /> },
  { path: "/contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
