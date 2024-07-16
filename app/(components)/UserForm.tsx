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

    }
}
