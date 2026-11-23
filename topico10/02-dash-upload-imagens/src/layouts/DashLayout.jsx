/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router";
import appLogo from "../assets/appLogo.svg";
import logoutIcon from "../assets/logout.svg";


export const Private = ({ children }) => {

  const { isLogged } = useAuthContext();

  if (!isLogged) return <Navigate to="/login" />;
  if (isLogged instanceof Promise) return <Protected>{children}</Protected>
  return children;
}

export const Protected = ({ children }) => {
  const { isLogged } = useAuthContext();
  const navigate = useNavigate()

  if (!isLogged) navigate('/login')
  if (isLogged === true) return children


  return (
    <div className="dashboard-layout">
      <header>
        <div className="dashboard-header-logo">
          <Link to="/">
            <img src={appLogo} />
          </Link>
        </div>
        <div>Dashboard</div>
      </header>
      <main>
        <section>
          <p>Verificando autenticação...</p>
        </section>
      </main>
    </div>
  );
}

export default function DashLayout() {
  const { user, logOut } = useAuthContext();
  console.log({ user });
  const navigate = useNavigate();

  const onLogout = async () => {
    await logOut()
    navigate("/login");
  };


  return (
    <div className="dashboard-layout">
      <header>
        <div className="dashboard-header-logo">
          <Link to="/">
            <img src={appLogo} />
          </Link>
        </div>
        <div>Bem vindo, {user?.name} !</div>
        <div className="dashboard-header-logo dashboard-logout-icon">
          <a href="#" onClick={onLogout} >
            <img src={logoutIcon} />
          </a>
        </div>
      </header>
      <main>
        <aside className="dashboard-sidebar">
          <Link to="/dashboard">Produtos</Link>
          <Link to="/users">Users</Link>
          <Link to="/cadastro">Novo User</Link>
          <Link to="/fornecedores">Gerenciar Fornecedores</Link>
          <Link to="#">Menu</Link>
        </aside>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
