import React, { useState } from 'react'
import { errorUtils } from '../utils/errorUtils'

const Input = ({ type,id,name,formState,formStateFunction,errorState,errorStateFunction }) => {

    const [isFocus, setIsFocus] = useState(false);

    const handleChange = (e) => {
        const {id, value, type, name} = e.target;

        formStateFunction({
            ...formState,
            [id]: value
        })

        errorStateFunction({
            ...errorState,
            [id]: errorUtils(type,value,name)
        })
    }

    return (
        <div className='border'>
            <input
                type={type}
                id={id}
                name={name}
                onChange={handleChange}
            />
            
        </div>
    )
}

export default Input