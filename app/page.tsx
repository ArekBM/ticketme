import TicketCard from './(components)/TicketCard'

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
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
const Dashboard = async() => {

  const data = await getTickets()

  const tickets = data.tickets

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

                {tickets?.filter((ticket : any)  => ticket.category === uniqueCategory).map((filteredTicket: any, _index: any) => (
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