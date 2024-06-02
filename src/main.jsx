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
import UserDetails from "./assets/components/UserDetails.jsx";
import SignUp from "./assets/components/SignUp.jsx";
import SignIn from "./assets/components/SignIn.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
                loader: () => fetch("https://user-management-crud-server.vercel.app/users"),
            },
            {
                path: "/users/:id",
                element: <UserDetails />,
                loader: ({ params }) => fetch(`https://user-management-crud-server.vercel.app/users/${params.id}`),
            },
            {
                path: "/adduser",
                element: <AddUser />,
            },
            {
                path: "/updateuser/:id",
                element: <UpdateUser />,
                loader: ({ params }) => fetch(`https://user-management-crud-server.vercel.app/users/${params.id}`),
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <SignIn />,
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
