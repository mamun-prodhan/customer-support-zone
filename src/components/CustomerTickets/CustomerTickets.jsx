import React from 'react';
import TicketCard from '../TicketCard/TicketCard';

const CustomerTickets = ({ticketData, setTaskInProgress, taskInProgress}) => {
    const handleInprogress = (ticket)=>{
        setTaskInProgress([...taskInProgress, ticket]);
    }
    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                ticketData?.map((ticket, idx) => 
                <TicketCard
                 key={idx} 
                 ticket={ticket}
                 handleInprogress={handleInprogress}
                 />)
            }
        </div>
    );
};

export default CustomerTickets;