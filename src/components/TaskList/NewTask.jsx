import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const NewTask = ({ data, userData, setUserData }) => {
    // Define the updated task status
  const updatedTaskStatus = {
    active: true,
    new_task: false,
    completed: false,
    failed: false,
  };

  const acceptTaskHandler = (taskIndex) => {
    const updatedUserData = userData.map((employee) => {
      if (employee.id === data.assignedToId) {
        // Update the specific task using its index
        const updatedTasks = employee.tasks.map((task, index) => {
          if (index === taskIndex) {
            // Replace the task's status with the updated one
            return { ...task, ...updatedTaskStatus };
          }
          return task;
        });

        // Update the task counters for the employee
        const updatedTaskCounters = {
          ...employee.task_counters,
          active: employee.task_counters.active + 1, // Increment active tasks
          new_task: employee.task_counters.new_task - 1, // Decrement new tasks
        };

        return { ...employee, tasks: updatedTasks, task_counters: updatedTaskCounters };
      }
      return employee;
    });

    // Update the state and localStorage
    setUserData(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    toast.success("Task Accepted and Marked as Active!", {
      theme: "dark",
      draggable: true,
    });
  };

    return (
        <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 bg-red-600 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.task_date}</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>{data.task_title}.</h2>
            <p className='mt-2 text-sm'>
            {data.task_description}
            </p>
            <div className='mt-4'>
                <button onClick={() => acceptTaskHandler(data.taskIndex)} className='text-sm bg-green-500 rounded px-2 py-1'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask