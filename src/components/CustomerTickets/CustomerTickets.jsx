import React from 'react';
import TicketCard from '../TicketCard/TicketCard';

const CustomerTickets = ({ticketData}) => {
    console.log(ticketData);
    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                ticketData?.map((ticket, idx) => <TicketCard key={idx} ticket={ticket}/>)
            }
        </div>
    );
};

export default CustomerTickets;