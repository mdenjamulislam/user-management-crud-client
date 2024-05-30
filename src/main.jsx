import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvicer from "./assets/providers/AuthProvider/AuthProvicer.jsx";
import Root from "./assets/layout/Root/Root.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";
import AddUser from "./assets/components/AddUser.jsx";
import UpdateUser from "./assets/components/UpdateUser.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
                loader: () => fetch("http://localhost:5000/users"),
            },
            {
                path: "/adduser",
                element: <AddUser />,
            },
            {
                path: "/updateuser/:id",
                element: <UpdateUser />,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvicer>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvicer>
    </React.StrictMode>,
);
