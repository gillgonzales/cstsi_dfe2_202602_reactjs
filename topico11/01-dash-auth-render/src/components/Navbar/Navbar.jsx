import appLogo from "../../assets/appLogo.svg";
import { Link } from "react-router";
import { useAuthContext } from "../../contexts/AuthProvider";

export const Navbar = () => {
  const { isLogged, logOut } = useAuthContext();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <img src={appLogo} className="nav_logo_img" />
        </Link>
      </div>
      <div className="navbar-links">
        {isLogged ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="#" onClick={()=>logOut()}>Log out</Link>
          </>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </div>
    </nav>
  );
};
