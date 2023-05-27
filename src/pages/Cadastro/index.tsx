import { useNavigate } from 'react-router-dom'
import { Context } from '../../contexts/Context'
import { ChangeEvent, useContext, useState } from 'react'


export const Cadastro = () => {
    const { state, dispatch } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }
    const handleLastName = (e: ChangeEvent<HTMLInputElement>) => { setLastName(e.target.value) }
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }

    const handleCadastro = (e: React.FormEvent) => {
        if (name !== '' && lastName !== '' && email !== '' && password !== '') {
            e.preventDefault();
            dispatch({
                type: 'CREATE_USER',
                payload: {
                    name: name,
                    lastname: lastName,
                    email: email,
                    password: password
                }
            });
            alert('Cadastro realizado com sucesso!');
            navigate('/login');
        }
    }

    return (
        <div className='flex items-center min-h-screen'>
            <div className='flex-1 flex flex-col justify-around items-center p-4 sm:p-2 md:p-0'>
                <div className='w-full sm:w-132'>
                    <h2 className='text-4xl font-semibold mb-3' >Cadastrar-se </h2>
                    <form action="" className='flex flex-col'>
                        <fieldset className='flex flex-col sm:flex-row my-2 gap-2'>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="name" className='mb-2'>*Nome</label>
                                <input id='name' type="text" placeholder='' className='border p-2'
                                    required
                                    value={name}
                                    onChange={handleName}
                                />
                            </div>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="lastname" className='mb-2'>*Sobrenome</label>
                                <input id='lastname' type="text" placeholder='' className='border p-2'
                                    required
                                    value={lastName}
                                    onChange={handleLastName}
                                />
                            </div>
                        </fieldset>
                        <fieldset className='flex flex-col my-2'>
                            <label htmlFor="email" className='mb-2'>*E-mail</label>
                            <input id='email' type="email" placeholder='email@email.com' className='border p-2'
                                required
                                value={email}
                                onChange={handleEmail}
                            />
                        </fieldset>
                        <fieldset className='flex flex-col my-2'>
                            <label htmlFor="pass" className='mb-2'>*Senha</label>
                            <input id='pass' type="password" placeholder='Senha' className='border p-2 rounded'
                                required
                                value={password}
                                onChange={handlePassword}
                            />
                        </fieldset>
                        <fieldset className='flex flex-col sm:flex-row justify-around'>
                            <button onClick={handleCadastro}
                                className='rounded bg-brand-green text-white text-center font-semibold p-3 px-10 my-4'>Cadastrar</button>
                            <button onClick={() => { navigate(-1) }}
                                className='rounded bg-red-800 text-white text-center font-semibold p-3 px-10 my-4'>Voltar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    )
}