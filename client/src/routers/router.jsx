import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";

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
            }
        ]
    },
]);

export default rounter;