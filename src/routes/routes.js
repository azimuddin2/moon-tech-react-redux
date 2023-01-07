import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "top-rated",
                element: <TopRated></TopRated>,
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "cart",
                element: <Cart></Cart>,
            }
        ],
    },
]);

export default routes;