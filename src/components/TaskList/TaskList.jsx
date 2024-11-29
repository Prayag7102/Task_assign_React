import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {

  const [userData, setUserData] = useContext(AuthContext);

  console.log("Rendering TaskList with userData:", userData);
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full  mt-10'>
      {data.tasks.map((elem,index)=>{
        if(elem.active){
          return <AcceptTask key={index} task={elem} data={elem}   />
        }
        if(elem.new_task){
          return <NewTask key={index} task={elem} data={elem} taskIndex={index}  userData={userData}
          setUserData={setUserData} />
        }
        if(elem.completed){
          return <CompleteTask key={index} task={elem} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={index} task={elem} data={elem} />
        }
      })}
    </div>
  )
}

export default TaskList