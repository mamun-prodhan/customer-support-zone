import { Suspense, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TaskBoard from './components/TaskBoard/TaskBoard'
import TaskPanel from './components/TaskPanel/TaskPanel'

const ticketsDataFetch = async()=>{
  return await fetch('../public/tickets.json')
              .then(res => res.json())
}

function App() {

  const fetchTicket = ticketsDataFetch();
  const [taskInProgress, setTaskInProgress] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  return (
    <>
      <Header/>
      <TaskBoard/>
      <Suspense fallback={<div className='flex flex-col items-center justify-center'><span className="loading loading-spinner loading-xl"></span></div>}>
        <TaskPanel 
          fetchTicket={fetchTicket} 
          taskInProgress={taskInProgress} 
          setTaskInProgress={setTaskInProgress}
          completedTask={completedTask}
          setCompletedTask={setCompletedTask}
        />
      </Suspense>
      
    </>
  )
}

export default App
