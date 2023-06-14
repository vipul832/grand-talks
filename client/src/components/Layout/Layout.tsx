import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
