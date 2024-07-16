import TicketCard from './(components)/TicketCard'

const getTickets = async () => {
  try {
    const res = await fetch('https://ticketme-arekbm.vercel.app/api/Tickets', {
      cache: 'no-store'
    })

    if(!res.ok){
      throw new Error('Failed to fetch topics')
    }
    return res.json()
  } catch (error){
    console.log('failed to get tickets', error)
  }
}

const getUsers = async () => {
  try {
    const res = await fetch('https://ticketme-arekbm.vercel.app/api/Users', {
      cache: 'no-store'
    })

    if(!res.ok){
      throw new Error('Failed to fetch Users')
    }
    return res.json()
  } catch (error){
    console.log('failed to get users', error)
  }
}
const Dashboard = async() => {

  const data = await getTickets()

  const users = await getUsers()

  const tickets = data?.tickets

  const uniqueCategories = [
    //@ts-ignore
    ...new Set(tickets?.map(({ category } : any) => category)),
  ];

  return (
    <>
      <div className='p-5'>
        <div>
          {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className='mb-4'>
              <h2>{uniqueCategory}</h2>
              <div className='lg:grid grid-cols-2 xl:grid-cols-4'>

                {tickets && tickets.filter((ticket : any)  => ticket.category === uniqueCategory).map((filteredTicket: any, _index: any) => (
                  <TicketCard id={_index} key={_index} ticket={filteredTicket} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Dashboard