import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signup, login } from '../context/actions/authAction'

const Auth = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup){
            dispatch(signup({firstname,lastname,email,password}, navigate));
        }
        else{
            dispatch(login({email,password}, navigate));
        }
    }


    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <form
                onSubmit={ handleSubmit }
                className='w-[400px] h-auto flex flex-col justify-center items-center'
            >
                <label htmlFor="firstname">Firstname</label>
                <input type="text" name="firstname" id="firstname" onChange={(e) => setFirstname(e.target.value)} />

                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" onChange={(e) => setLastname(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Auth