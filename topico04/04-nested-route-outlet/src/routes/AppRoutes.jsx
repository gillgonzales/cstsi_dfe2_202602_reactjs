
import Ola from '../components/Ola/Ola';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router'


export const AppRoutes = () => (

  <BrowserRouter>
  <Routes>
     <Route
      path="/"
      element={
        <div>
          Exemplo de rotas aninhadas!
          <hr />
          <Outlet />
        </div>
      }
    >
      <Route path="/" element={<Link to="/ola">Olá</Link>} />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </Route>
  </Routes>
  </BrowserRouter>
);