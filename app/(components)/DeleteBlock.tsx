'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation"

const DeleteBlock = ({ id } : any) => {

    const router = useRouter()

    const deleteTicket = async () => {
        const res = await fetch(`https://ticketme-arekbm.vercel.app/api/Tickets/${id}`, {
            method: 'DELETE'
        })

        if(res.ok){
            router.refresh()
        }
    }
    return (
        <div>
            <FontAwesomeIcon 
                icon={faX} 
                className='text-red-400 hover:cursor-pointer hover:text-red-200' 
                onClick={deleteTicket}
            />
        </div>
    )
}

export default DeleteBlock