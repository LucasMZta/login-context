import { Navigate } from "react-router-dom";
import { Context } from "./contexts/Context";
import { useContext } from "react";
type Props = {
    children: JSX.Element;
}
export const RequireAuth = ({ children }: Props) => {
    const {state, dispatch} = useContext(Context);

    if (!state.auth.auth) {
        alert('Você não está logado, favor realizar o login!');
        return <Navigate to={'/login'} />;
    }
    return children;
}