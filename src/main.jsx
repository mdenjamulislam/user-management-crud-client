import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvicer from "./assets/providers/AuthProvider/AuthProvicer.jsx";
import Root from "./assets/layout/Root/Root.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvicer>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvicer>
    </React.StrictMode>
);
