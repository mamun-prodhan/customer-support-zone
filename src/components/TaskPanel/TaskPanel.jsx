import React, { use } from 'react';
import CustomerTickets from '../CustomerTickets/CustomerTickets';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../ResolvedTask/ResolvedTask';

const TaskPanel = ({fetchTicket, taskInProgress, setTaskInProgress, setCompletedTask, completedTask}) => {
  const ticketData = use(fetchTicket);
  
    return (
      <div className='max-w-360 w-full mx-auto grid grid-cols-4 gap-8 pb-20'>
        <div className='col-span-3'>
          <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Customer Tickets</h1>
          <CustomerTickets
            ticketData={ticketData}
            setTaskInProgress={setTaskInProgress}
            taskInProgress={taskInProgress}
          />
        </div>
        
        <div className=''>
          <h1  className='text-2xl font-semibold text-[#34485A]  mb-4'>Task Status</h1>
          <TaskStatus
           taskInProgress={taskInProgress}
           setTaskInProgress={setTaskInProgress}
           completedTask={completedTask}
           setCompletedTask={setCompletedTask}
          />

          <h1  className='text-2xl font-semibold text-[#34485A] mb-4 mt-10'>Resolved Task</h1>
          <ResolvedTask
           completedTask={completedTask}
           setCompletedTask={setCompletedTask}
          />
        </div>
      </div>
    );
};

export default TaskPanel;