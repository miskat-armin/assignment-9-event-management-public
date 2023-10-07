import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";
import Header from "../component/header/navBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[85%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
