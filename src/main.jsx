import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import CustomRouter from "./router/route.jsx";
import AuthProvider from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={CustomRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
