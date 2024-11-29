import React from 'react'

const AcceptTask = ({data}) => {

  
  return (
        <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
              <h3 className='px-3 py-1 bg-red-600 rounded text-sm'>{data.category}</h3>
              <h4 className='text-sm'>{data.task_date}</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>{data.task_title}</h2>
            <p className='mt-2 text-sm'>
                {data.task_description}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Complete</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask