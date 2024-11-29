import React from 'react'
import CreateTask from '../layout/CreateTask';
import AllTask from '../layout/AllTask';
import AdminHeader from '../layout/AdminHeader';
import Header from '../layout/Header';

const AdminDashboard = ({changeUser}) => {
  return (
    <div className='p-7 h-screen w-full'>
        <AdminHeader changeUser={changeUser}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard;