import Header from "../components/Header/Header.jsx";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router";

function Guest() {
  return (
    <div className="guest-layout">
      <Navbar />
      <Header />
      <main>
          <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Guest;
