import { Outlet } from "react-router-dom";
import AppFooter from "../component/footer/footer";
import Header from "../component/header/navBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[85%] mx-auto">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
};

export default Layout;
