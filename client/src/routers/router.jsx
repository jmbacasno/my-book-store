import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";

const rounter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <div>Home Page</div>
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