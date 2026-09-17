import { Outlet } from "react-router";
import Navbar from "../nav/Navbar";
import Footer from "../nav/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
