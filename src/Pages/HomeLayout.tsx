import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidenav from "../Components/Sidenav";

const HomeLayout = () => {
  return (
    <>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default HomeLayout;
