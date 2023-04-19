import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Orders from "./components/shop/orders/Orders";
import cartProductLoader from "./dataLoder/cartData";
import Login from "./components/logIn/Login";
import Error404 from "./components/error/Error404";
import { FadeLoader } from "react-spinners";
import SingUp from "./components/logIn/singUp/SingUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/Order-Review",
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singUp",
        element: <SingUp />,
      },
    ],
  },

  {
    path: "*",
    element: <Error404 />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
