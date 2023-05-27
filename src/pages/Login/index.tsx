import Users from '../../assets/image/illustration.svg'
import Google from '../../assets/image/google.png';
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../contexts/Context';
import { ChangeEvent, useContext, useState } from 'react';

export const Login = () => {
    const { state, dispatch } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }

    const handleLogin = (e: React.FormEvent) => {
        if (email !== '' && password !== '') {
            e.preventDefault();

            if(email === state.user.email && password === state.user.password) {
                dispatch({
                    type: 'LOGIN_STATUS',
                    payload: {
                        auth: true
                    }
                });
                alert('Logado com sucesso!');
                navigate('/home');
            } else {
                alert('Login e/ou senha incorretos');
            }
            
        }
    }

    return (
        <div className='flex h-screen'>
            <div className='bg-dark-20 flex-1 flex justify-center items-center hidden lg:flex'>
                <div className='max-w-sm'>
                    <img src={Users} alt="" />
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-around items-center p-4 sm:p-2 md:p-0'>
                <div className='w-96'>
                    <span className='block'>Bem vindo de volta </span>
                    <h2 className='text-2xl font-semibold mb-3' >Faça login na sua conta</h2>
                    <form action="" className='flex flex-col'>
                        <fieldset className='flex flex-col my-2'>
                            <label htmlFor="email" className='mb-2'>E-mail</label>
                            <input id='email' type="email" placeholder='email@email.com' className='border p-2'
                                required
                                value={email}
                                onChange={handleEmail} />
                        </fieldset>
                        <fieldset className='flex flex-col my-2'>
                            <label htmlFor="pass" className='mb-2'>Senha</label>
                            <input id='pass' type="password" placeholder='Senha' className='border p-2 rounded'
                                required
                                value={password}
                                onChange={handlePassword} />
                        </fieldset>
                        <fieldset className='flex justify-between my-2'>
                            <div className='flex items-center'>
                                <input id='check' type="radio" />
                                <label htmlFor="check" className='ml-2'>Lembre de mim</label>
                            </div>
                            <a href="" className='text-brand-blue'>Esqueceu sua senha?</a>
                        </fieldset>
                        <button onClick={handleLogin} className='rounded bg-brand-green text-white text-center font-semibold p-3 my-4'>Entrar</button>
                        <button type='button' className='rounded bg-dark-10 text-white font-semibold p-3 flex justify-center items-center'>
                            <img src={Google} alt="" className='mx-2' /> Ou faça login com o Google
                        </button>
                    </form>
                </div>
                <div>
                    <p>Não tem uma conta? <Link to='/register' className='text-brand-blue'>Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    )
}