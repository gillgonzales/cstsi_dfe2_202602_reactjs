import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
    BrowserRouter,
    Outlet,
    Link

} from "react-router";
import Guest from "../layouts/Guest";
import Home from "../pages/Home/Home";
import Show from "../pages/Show/Show";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import { SignUp } from "../pages/SignUp/SignUp";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Guest />}>
                <Route path="/" element={<Home />} />
                <Route path="/produto/:id" element={<Show />} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
            <Route path="/" element={
                <>
                    <Outlet />
                    <Link to={'/'}>Página Inicial</Link>
                </>
            }>
                <Route path="/login" element={<Login />} />I
                <Route path="/register" element={<SignUp />} />
            </Route>

        </Routes>
    </BrowserRouter>
)

