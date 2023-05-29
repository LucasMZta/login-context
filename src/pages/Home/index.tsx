import { useContext } from "react"
import { Context } from "../../contexts/Context"
import { Link, Navigate, useNavigate } from "react-router-dom";
import Avatar from '../../assets/image/avatar.png'
import User from '../../assets/image/user.svg'

export const Home = () => {

    const navigate = useNavigate();

    const { state, dispatch } = useContext(Context);

    const handleLogout = () => {

        dispatch({
            type: 'LOGIN_STATUS',
            payload: {
                auth: false
            }
        });

    }
    return (
        <div className="min-h-screen flex flex-col">
            <header className="h-16 flex items-center justify-end drop-shadow shadow-md">
                <div className="flex items-center text-lg px-5">
                    <span className="block mr-5">{state.user.name}</span>
                    <img src={Avatar} alt="" className='h-12 rounded' />
                </div>
            </header>
            <div className="flex items-center justify-center flex-1">
                <div className="py-5 shadow-[0_0_10px_1px_rgba(203,203,203)] w-full sm:w-120 flex flex-col justify-center items-center">
                   <h5 className="text-center text-2xl font-thin">Bem vindo(a), {state.user.name}</h5>
                    <img src={User} width={200} alt="" className="my-8" />

                    <Link className="text-center block rounded bg-brand-blue text-white text-center font-semibold px-8 py-2 my-4" to={'/'} onClick={handleLogout}>Sair</Link>
                </div>


            </div>


        </div>
    )
}