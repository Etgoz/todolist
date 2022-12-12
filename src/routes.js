import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Lists } from "./pages/Lists";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "home", element: <Home /> },
			{ path: "sign-in", element: <SignIn /> },
			{ path: "lists", element: <Lists /> },
		],
	},
	{ path: "*", element: <Navigate to="/home" replace /> },
]);
