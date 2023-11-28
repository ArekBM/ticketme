'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = () => {

    const router = useRouter() 
    const startingTicketData ={
        title: '',
        description: '',
        priority: 1,
        progress: 0,
        status: 'Not started',
        category: 'Hardware Problem'
    }

    const [ formData, setFormData] = useState(startingTicketData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData(( prevState )=> ({
            ...prevState, 
            [name]: value,
        }));
    }
    
    const handleSubmit = async (e: React.FormEvent ) => {
        e.preventDefault()

        const res = await fetch('/api/Tickets',{
            method: 'POST', 
            body: JSON.stringify({formData}), 
            //@ts-ignore
            'content-type': 'application/json',
        })
        if(!res.ok){
            throw new Error('Failed to create ticket')
        }
        router.refresh()
        router.push('/')

    }
    return(
        <div className='flex justify-center'>
            <form 
                className='flex flex-col gap-3 w-1/2'
                method='post' 
                onSubmit={handleSubmit}
            >
                <h3>Create Your Ticket</h3>
                <label>Title</label>
                <input 
                    id='title' 
                    name='title' 
                    type='text' 
                    onChange={handleChange} 
                    required 
                    value={formData.title} 
                />
                    <label>Description</label>
                <textarea
                    id='description'
                    name='description'
                    onChange={handleChange}
                    required
                    rows={5}
                    value={formData.description}
                />
                    <label>Category</label>
                <select name='category' value={formData.category} onChange={handleChange}>
                    <option value='Hardware Problem'>Hardware Problem</option>
                    <option value='Software Problem'>Hardware Problem</option>
                    <option value='Project'>Project</option>
                </select>
                    <label>Priority</label>
                <div>
                    <input 
                        id='priority-1' 
                        name='priority' 
                        type='radio' 
                        onChange={handleChange} 
                        value={1} 
                        checked={formData.priority == 1} 
                    />
                    <label>1</label>
                    <input 
                        id='priority-1' 
                        name='priority' 
                        type='radio' 
                        onChange={handleChange} 
                        value={2} 
                        checked={formData.priority == 2} 
                    />
                    <label>2</label>                    <input 
                        id='priority-1' 
                        name='priority' 
                        type='radio' 
                        onChange={handleChange} 
                        value={3} 
                        checked={formData.priority == 3} 
                    />
                    <label>3</label>
                    <input 
                        id='priority-1' 
                        name='priority' 
                        type='radio' 
                        onChange={handleChange} 
                        value={4} 
                        checked={formData.priority == 4} 
                    />
                    <label>4</label>
                    <input 
                        id='priority-1' 
                        name='priority' 
                        type='radio' 
                        onChange={handleChange} 
                        value={5} 
                        checked={formData.priority == 5} 
                    />
                    <label>5</label>
                </div>
                    <label>Progress</label>
                <input 
                    type='range' 
                    id='progress' 
                    name='progress' 
                    value={formData.progress} 
                    min={0} 
                    max={100} 
                    onChange={handleChange} 
                />
                    <label>Status</label>
                <select name='status' value={formData.status} onChange={handleChange}>
                    <option value='not started'>Not Started</option>
                    <option value='started'>Started</option>
                    <option value='completed'>Completed</option>
                </select>
                <input type='submit' className='btn' value='Create Ticket' />
            </form>
        </div>
    )
}

export default TicketForm