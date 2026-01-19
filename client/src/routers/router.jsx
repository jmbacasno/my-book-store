import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";

const rounter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/orders",
                element: <div>Orders Page</div>
            },
            {
                path: "/about",
                element: <div>About Page</div>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
]);

export default rounter;