
import Ola from './components/Ola/Ola.js';
import { BrowserRouter, Routes, Route } from 'react-router'


export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div>Rota Gerencianda no lado do Cliente com React Router!</div>
        }
      />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </Routes>
  </BrowserRouter>
);