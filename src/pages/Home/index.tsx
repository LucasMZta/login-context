import { useContext } from "react"
import { Context } from "../../contexts/Context"
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Home = ()=>{

    const navigate = useNavigate();

    const {state, dispatch} = useContext(Context);

    const handleLogout = () => {

        dispatch({
            type: 'LOGIN_STATUS',
            payload: {
                auth: false
            }
        });
        
    }
    return(
        <div>
            Área logada, bem vindo! <br />
            NOME: {state.user.name} {state.user.lastname} <br />
            EMAIL: {state.user.email} <br />
            SENHA: {state.user.password} <br />

            <Link to={'/'} onClick={handleLogout}>Sair</Link>

        </div>
    )
}