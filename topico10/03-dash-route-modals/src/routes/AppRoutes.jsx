import {
  BrowserRouter,
  Route,
  Routes
} from "react-router";
import Guest from "../layouts/Guest";
import Home from "../pages/Home/Home";
import Show from "../pages/Show/Show";
import DashLayout, { Private } from "../layouts/DashLayout";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Users from "../pages/Users/Users_use";
import Produtos from "../pages/Dashboard/Produtos/Produtos";
import FornecedoresPage from "../pages/Dashboard/fornecedores/FornecedoresPage";
import NotFound from "../pages/NotFound/NotFound";
import FornecedoresProvider from "../contexts/FornecedoresProvider";

export const AppRoutes = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Guest />}>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Show />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound/>}/>
      </Route>
      <Route path="/" element={
        <Private>
          <FornecedoresProvider>
            <DashLayout />
          </FornecedoresProvider>
        </Private>}>
        <Route path="/dashboard" element={<Produtos />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/fornecedores" element={<FornecedoresPage />} />
      </Route>
    </Routes>
  </BrowserRouter>)
}

