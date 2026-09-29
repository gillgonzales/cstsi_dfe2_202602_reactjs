
import Ola from '../components/Ola/Ola';
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Guest from '../layout/Guest';


export const AppRoutes = () => (

  <BrowserRouter>
  <Routes>
     <Route
      path="/"
      element={<Guest/>}
    >
      <Route path="/" element={<Link to="/ola">Olá</Link>} />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </Route>
  </Routes>
  </BrowserRouter>
);