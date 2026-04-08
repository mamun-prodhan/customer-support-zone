import React from 'react';
import TicketCard from '../TicketCard/TicketCard';

const CustomerTickets = ({ticketData, setTaskInProgress, taskInProgress}) => {
    const handleInprogress = (ticket)=>{
        if(taskInProgress.includes(ticket)){
            alert('Already added in Inprogress');
            return;
        }
        setTaskInProgress([...taskInProgress, ticket]);
    }
    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                ticketData.length? ticketData?.map((ticket, idx) => 
                <TicketCard
                 key={idx} 
                 ticket={ticket}
                 handleInprogress={handleInprogress}
                 />) : <p className='text-sm text-[#627382]'>You have no task / All task has been completed</p>
            }
        </div>
    );
};

export default CustomerTickets;