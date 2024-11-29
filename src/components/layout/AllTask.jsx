import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    
  return (
    <div id='alltask' className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div  className='bg-red-400 mb-2 py-2 px-4 flex justify-between'>
            <h2 className='w-1/5 text-lg font-medium'>Name</h2>
            <h3  className='w-1/5 text-lg font-medium'>New Task</h3>
            <h5  className='w-1/5 text-lg font-medium'>Active Task</h5>
            <h5  className='w-1/5 text-lg font-medium'>Completed</h5>
            <h5  className='w-1/5 text-lg font-medium'>Failed</h5>
        </div>
       <div>
        {userData.map((elem, idx)=>{
            return  <div key={idx} className='border-2 bg-emerald-500-400 mb-2 py-2 px-4 flex justify-between'>
                <h2 className='w-1/5 text-lg font-medium'>{elem.first_name}</h2>
                <h5  className='w-1/5 text-lg font-medium text-blue-400'>{elem.task_counters.new_task}</h5>
                <h3  className='w-1/5 text-lg font-medium text-yellow-400'>{elem.task_counters.active}</h3>
                <h5  className='w-1/5 text-lg font-medium text-white'>{elem.task_counters.completed}</h5>
                <h5  className='w-1/5 text-lg font-medium text-red-600'>{elem.task_counters.failed}</h5>
            </div>
            })}
       </div>
    </div>
  )
}

export default AllTask