import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import  { AuthContext } from './context/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  //localStorage.clear();
  const [user, setUser] = useState(null)
  const [loggenInUserData, setLoggenInUserData] = useState(null)
  const [userData , setUserData]  = useContext(AuthContext);


  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setLoggenInUserData(userData.data)
    }
  },[])

  const handleLogin = (email,password)=>{
      if(email == 'admin@me.com' && password == '123'){
        setUser('admin');
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}));
      }
      else if(userData){
        const employee = userData.find((e)=>email == e.email && password == e.password);
        if(employee){
          setUser('employee');
          setLoggenInUserData(employee);
          localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee}));
        }
      }
      else{
        alert("invalid creadentials");
        
      }
  }
  return(
  <>
  <ToastContainer/>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin'? <AdminDashboard  changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard   changeUser={setUser} data={loggenInUserData}/> : " ")}
  </>
  )
}
