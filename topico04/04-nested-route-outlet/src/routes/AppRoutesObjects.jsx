import {
  Outlet,
  RouterProvider,
  Link,
  createBrowserRouter
} from 'react-router';
import Ola from '../components/Ola/Ola.jsx';

//Configuração de rotas com objetos
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        Exemplo de rotas aninhadas!
        <hr />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <Link to="/ola">Olá</Link>,
      },
      {
        path: '/ola',
        element: <Ola />,
      },
      {
        path: '/ola/:name',
        element: <Ola />,
      },
    ],
  },
]);

export const AppRoutesObjects = ()=>{
    return <RouterProvider router={router} />
}