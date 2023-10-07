import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/primaryLayout";
import ErrorPage from "../pages/errorPage";
import Home from "../pages/home";

const CustomRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/services.json')
        }
    ]
  },
]);

export default CustomRouter;
