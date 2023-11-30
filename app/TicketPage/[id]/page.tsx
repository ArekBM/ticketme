import TicketForm from '@/app/(components)/TicketForm'

const getTicketById = async ( id : any ) => {

    const res = await fetch(`https://ticketme-arekbm.vercel.app/api/Tickets/${id}`,{
    cache: 'no-store'
    })

    if(!res.ok){
        throw new Error('Failed to get ticket.')
    }

    return res.json()
}

const TicketPage =  async ({ params }: any) => {
    const EDITMODE = params.id === 'new' ? false : true
    let updateTicketData = {}

    if(EDITMODE){
        updateTicketData = await getTicketById(params.id)
        //@ts-ignore
        updateTicketData = updateTicketData.foundTicket
    } else {
        updateTicketData = {
            _id: 'new'
        }

    }
    
    return (
        <TicketForm ticket={updateTicketData} />
    )
}

export default TicketPage