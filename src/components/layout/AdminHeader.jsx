import React from 'react'
import { toast } from 'react-toastify';

const AdminHeader = ({changeUser}) => {


  const handleLogout = ()=>{
      localStorage.setItem('loggedInUser', '');
      toast.success("Successfully logout!",{
        theme: 'dark',
      });
      changeUser('');
      
  }
  
  
  return (
    <div className='w-full flex justify-between items-center'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Admin👍</span>  </h1>
        <button onClick={handleLogout} className='bg-red-600 px-4 py-3 rounded-md'>Log out</button>
    </div>
  )
}

export default AdminHeader;