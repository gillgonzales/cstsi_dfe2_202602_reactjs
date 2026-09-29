import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from 'react-router';
import Ola from './components/Ola/Ola.jsx';


const objectRoutes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/ola",
    element: <Ola />
  },

  {
    path: "/ola/:name",
    element: <Ola />
  }
]

const routerObjects = createBrowserRouter(objectRoutes)

const routerElements = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<App />} />
      <Route path={"/ola"} element={<Ola/>}/>
      <Route path={"/ola/:name"} element={<Ola />}/>
    </>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerObjects} />
  </StrictMode>,
)
