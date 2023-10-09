import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/primaryLayout";
import ErrorPage from "../pages/errorPage";
import BookedServices from "../pages/history";
import Home from "../pages/home";
import Registration from "../pages/registration";
import Service from "../pages/serviceDetails";
import Signin from "../pages/signin";
import PrivateRoute from "../PrivateRoute/privateRoute";

const CustomRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/event/:service_name",
        element: (
          <PrivateRoute>
            <Service />
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/history",
        element: <BookedServices></BookedServices>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default CustomRouter;
