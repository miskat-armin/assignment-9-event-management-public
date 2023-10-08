import { Outlet } from "react-router-dom";
import AppFooter from "../component/footer/footer";
import Header from "../component/header/navBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto">
        <Outlet/>
      </div>
      <AppFooter />
    </div>
  );
};

export default Layout;
