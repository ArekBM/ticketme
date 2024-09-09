'use client';

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const UserForm = ({ user } : any ) => {
    const router = useRouter()
    const startingUserData = { 
        id: '',
        name: '',
        email: ''
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        const name = e.target.name;

        setUserData(( prevState ) => ({
            ...prevState,
            [ name ] : value
        }))
    }

    const [userData, setUserData ] = useState(startingUserData)

    console.log(userData)

    return(
        <div>
            <form>
                <input 
                    id='id'
                    onChange={handleChange}
                    value={userData.id}
                />
                <input
                    id='name'
                    onChange={handleChange}
                    value={userData.name}
                />
                <input
                    id='email'
                    onChange={handleChange}
                    value={userData.email}
                />
            </form>
        </div>
    ) 

}

export default UserForm
