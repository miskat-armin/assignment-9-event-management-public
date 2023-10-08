import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/primaryLayout";
import ErrorPage from "../pages/errorPage";
import BookedServices from "../pages/history";
import Home from "../pages/home";
import Service from "../pages/serviceDetails";

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
        },
        {
          path: "/event/:service_name",
          element: <Service></Service>,
          loader: () => fetch('/services.json')
        },
        {
          path: "/history",
          element: <BookedServices></BookedServices>
      },
    ]
  },
]);

export default CustomRouter;
