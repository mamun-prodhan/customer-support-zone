import React from 'react';

const TaskStatus = ({taskInProgress, setTaskInProgress, setCompletedTask, completedTask, setTicketData, ticketData}) => {
    const handleCompletedTask = (task)=>{
        setCompletedTask([...completedTask, task]);

        const remainingTaskInProgress = taskInProgress.filter(taskP => taskP.id !== task.id);
        setTaskInProgress(remainingTaskInProgress);

        const remainingTicketData = ticketData.filter(taskD => taskD.id !== task.id);
        setTicketData(remainingTicketData);
    }
    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                taskInProgress.length ? taskInProgress.map((task, idx) => {
                    return(
                        <div key={idx} className='bg-base-100 shadow-sm p-4 rounded-sm'>
                            <h2 className='flex-1 text-lg text-[#001931] font-medium'>{task.title}</h2>
                            <button onClick={()=>handleCompletedTask(task)} className="mt-4 btn w-full text-white bg-[#02A53B]">Complete</button>
                        </div>
                    )
                }) : <p className='text-sm text-[#627382]'>Select a ticket to add to Task Status</p>
            }
        </div>
    );
};

export default TaskStatus;