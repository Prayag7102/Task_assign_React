    import React, { useContext, useState } from 'react'
    import { AuthContext } from '../../context/AuthProvider';
    import { toast } from 'react-toastify';

    const CreateTask = () => {


        const [userData, setUserData] = useContext(AuthContext)

        const [task_title, setTaskTitle] = useState('');
        const [task_description, setTaskDescription] = useState('');
        const [task_date, setTaskDate] = useState('');
        const [assignto, setAssignto] = useState('');
        const [category, setCategory] = useState('');

        const submitHandler = (e)=>{
            e.preventDefault();

            const task = {
            task_title,
            task_description,
            task_date,
            category,
            active: false,
            new_task: true,
            completed: false,
            failed: false,
            };
            const assignedUser = userData.find((elem) => elem.first_name === assignto);
            if (!assignedUser) {
                toast.error("Employee not found. Please try again.", {
                    theme: "dark",
                    draggable: true,
                });
                return;
            }
            const updatedUserData = userData.map((elem) => {
                if (elem.first_name === assignto) {
                    return {
                        ...elem,
                        tasks: [...(elem.tasks || []), task],
                        task_counters: {
                            ...elem.task_counters,
                            new_task: elem.task_counters.new_task + 1,
                        },
                    };
                }
                return elem;
            });
            setUserData(updatedUserData);
            localStorage.setItem("userData", JSON.stringify(updatedUserData));
            toast.success("Task Assigned Successfully!", {
                theme: "dark",
                draggable: true,
            });
            setAssignto("");
            setTaskDate("");
            setTaskTitle("");
            setTaskDescription("");
            setCategory("");
        };
        return (
            <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input
                            value={task_title}
                            onChange={(e)=>{
                                setTaskTitle(e.target.value);
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded  outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make UI Design' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                            value={task_date}
                            onChange={(e)=>{
                                setTaskDate(e.target.value);
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded  outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' />
                        </div>
                        {/*<div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                            <input
                            value={assignto}
                            onChange={(e)=>{
                                setAssignto(e.target.value);
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded  outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Employee Name' />
                        </div>*/}
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
                            <select
                            value={assignto}
                            onChange={(e) => {
                                setAssignto(e.target.value);
                            }}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-[#1c1c1c] border-[1px] border-gray-400 mb-4"
                            >
                            <option value="" disabled>
                                Select Employee
                            </option>
                            {userData.map((employee) => (
                                <option key={employee.first_name} value={employee.first_name}>
                                {employee.first_name} 
                                </option>
                            ))}
                            </select>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input
                            value={category}
                            onChange={(e)=>{
                                setCategory(e.target.value);
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded  outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Design, Dev, Etc..' />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea
                        value={task_description}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value);
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id=''></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>

                </form>
            </div>
        )
    }

    export default CreateTask