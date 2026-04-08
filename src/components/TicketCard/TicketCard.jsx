import React from 'react';
import CalenderIcon from '../../assets/calender-icon.png';

const TicketCard = ({ticket, handleInprogress}) => {
    const {id, title, description, customer, priority, status, createdAt} = ticket;
    return (
        <div onClick={()=>handleInprogress(ticket)} className='bg-base-100 shadow-sm p-4 rounded-sm cursor-pointer'>
            <div className='flex items-center gap-5 mb-2'>
                <h2 className='flex-1 text-lg text-[#001931] font-semibold'>{title}</h2>
                <div className={`flex items-center gap-2 ${status === 'Open' ? 'bg-[#B9F8CF]' : 'bg-[#F8F3B9]'} rounded-full px-2 py-1 text-sm text-[#001931] font-semibold`}><span className={`inline-block p-2 ${status === 'Open' ? 'bg-[#02A53B]' : 'bg-[#FEBB0C]'} rounded-[50px]`}></span> {status}</div>
            </div>

            <p className='text-[#627382] text-sm'>{description}</p>

            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-4'>
                    <p className='text-[#627382] text-sm'>{id}</p>
                    <p className={`uppercase text-sm font-semibold ${priority === 'High' && 'text-[#F83044]'} ${priority === 'Medium' && 'text-[#FEBB0C]'} ${priority === 'Low' && 'text-[#02A53B]'}`}>{priority} Priority</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='text-sm text-[#627382]'>{customer}</p>
                    <div className='flex items-center gap-2'>
                        <img className='h-6 w-6' src={CalenderIcon} alt="Calender Icon" />
                        <p className='text-sm text-[#627382]'>{createdAt}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TicketCard;