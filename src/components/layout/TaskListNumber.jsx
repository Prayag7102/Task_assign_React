import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex  gap-5 justify-between mt-10 screen '>
        <div className=' bg-red-600 w-[45%] py-6 px-9 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.task_counters.new_task}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' bg-blue-600 w-[45%] py-6 px-9 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.task_counters.active}</h2>
                <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className=' bg-green-600 w-[45%] py-6 px-9 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.task_counters.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className=' bg-yellow-600 w-[45%] py-6 px-9 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.task_counters.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber