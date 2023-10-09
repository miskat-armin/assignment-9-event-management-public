import { Outlet } from "react-router-dom";
import AppFooter from "../component/footer/footer";
import Header from "../component/header/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto">
        <Outlet/>
        <ToastContainer />
      </div>
      <AppFooter />
    </div>
  );
};

export default Layout;
