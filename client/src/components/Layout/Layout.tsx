import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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
