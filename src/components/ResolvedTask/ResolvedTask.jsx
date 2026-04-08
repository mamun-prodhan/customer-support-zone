import React from 'react';

const ResolvedTask = ({completedTask, setCompletedTask}) => {
    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                completedTask.length ? completedTask.map((task, idx) =>{
                    return (
                        <div key={idx} className='shadow-sm p-4 rounded-sm bg-[#E0E7FF]'>
                            <h2 className='flex-1 text-lg text-[#001931] font-medium'>{task.title}</h2>
                        </div>
                    )
                }) : <p className='text-sm text-[#627382]'>No resolved tasks yet.</p>
            }
        </div>
    );
};

export default ResolvedTask;