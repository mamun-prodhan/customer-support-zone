import Vector1 from '../../assets/vector1.png';

const TaskBoard = ({taskInProgress, completedTask}) => {
    return (
        <div className='max-w-360 w-full mx-auto flex items-center gap-6 my-20'>
            <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex-1 px-10 py-16 rounded-xl relative'>
                <h2 className='text-xl text-center text-white mb-4'>In-Progress</h2>
                <h1 className='text-5xl font-bold text-white text-center'>{taskInProgress.length}</h1>
                <img className='absolute top-0 left-0' src={Vector1} alt="bg one" />
                <img className='absolute top-0 right-0 transform scale-x-[-1]' src={Vector1} alt="bg one" />
                
            </div>
            <div className='flex-1 bg-linear-to-r from-[#54CF68] to-[#00827A] px-10 py-16 rounded-xl relative'>
                <h2 className='text-xl text-center text-white mb-4'>Resolved</h2>
                <h1 className='text-5xl font-bold text-white text-center'>{completedTask.length}</h1>
                <img className='absolute top-0 left-0' src={Vector1} alt="bg one" />
                <img className='absolute top-0 right-0 transform scale-x-[-1]' src={Vector1} alt="bg one" />
            </div>
        </div>
    );
};

export default TaskBoard;