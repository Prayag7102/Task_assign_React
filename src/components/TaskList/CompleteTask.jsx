import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 bg-red-600 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.task_date}</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>{data.task_title}.</h2>
            <p className='mt-2 text-sm'>
            {data.task_description}
            </p>
            <div className='mt-4'>
                <button className='w-full bg-green-500 px-2 py-1 rounded'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask