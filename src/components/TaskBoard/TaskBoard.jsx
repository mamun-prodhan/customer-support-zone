import React from 'react';

const TaskBoard = () => {
    return (
        <div className='max-w-360 w-full mx-auto'>
            <div>
                <h2>In-Progress</h2>
                <h1>0</h1>
            </div>
            <div>
                <h2>Resolved</h2>
                <h1>0</h1>
            </div>
        </div>
    );
};

export default TaskBoard;