import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Input } from '../components'
import { signup, login } from '../context/actions/authAction'

const Auth = () => {

    const [isSignup, setIsSignup] = useState(true)
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = Object.values(error).every(value => value === '') && Object.keys(error).length !== 0;

        if(isValid){
            if(isSignup){
                dispatch(signup({formData}, navigate));
            }
            else{
                dispatch(login({formData}, navigate));
            }
        }
    }

    // console.log(error)

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <form
                onSubmit={ handleSubmit }
                className='w-[400px] h-auto flex flex-col justify-center items-center'
            >
                <Input 
                    type={'text'}
                    id={'firstname'}
                    name={'Firstname'}
                    formState={formData}
                    formStateFunction={setFormData}
                    errorState={error}
                    errorStateFunction={setError}
                />

                <Input 
                    type={'text'}
                    id={'lastname'}
                    name={'Lastname'}
                    formState={formData}
                    formStateFunction={setFormData}
                    errorState={error}
                    errorStateFunction={setError}
                />

                <Input 
                    type={'email'}
                    id={'email'}
                    name={'Email'}
                    formState={formData}
                    formStateFunction={setFormData}
                    errorState={error}
                    errorStateFunction={setError}
                />

                <Input 
                    type={'password'}
                    id={'password'}
                    name={'Password'}
                    formState={formData}
                    formStateFunction={setFormData}
                    errorState={error}
                    errorStateFunction={setError}
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Auth