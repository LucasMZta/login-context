import { useRoutes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";
import { RequireAuth } from "../requireAuth";
import { NotFound } from "../pages/NotFound";

export const MainRoute = () => {
    return useRoutes([
        {path: '/', element: <Login />},
        {path: '/login', element: <Login />},
        {path: '/home', element: <RequireAuth> 
                                        <Home /> 
                                </RequireAuth>},
        {path: '/register', element: <Cadastro />},
        {path: '*', element: <NotFound />}
    ])
}