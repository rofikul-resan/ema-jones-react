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
import SingUp from "./components/logIn/singUp/SingUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./components/provider/AuthProvider";
import Checkout from "./components/shop/Checkout/Checkout";
import PrivetRoute from "./components/provider/PrivetRoute";
import Inventory from "./components/Header/Invantory/Inventory";
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
        path: "/order-Review",
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },
      {
        path: "/checkout",
        element: (
          <PrivetRoute>
            <Checkout></Checkout>
          </PrivetRoute>
        ),
      },
      {
        path: "/inventory",
        element: (
          <PrivetRoute>
            <Inventory></Inventory>
          </PrivetRoute>
        ),
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
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
