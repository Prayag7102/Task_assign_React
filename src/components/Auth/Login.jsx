import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setEmail('');
    setPassword('');
    toast.success("Successfully Login!",{
      theme: 'dark',
    });
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20'>
        <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col items-center justify-center'>
          <input value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }} className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white' type='email' placeholder='Enter Your Email' required />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
           className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white mt-3' type='password' placeholder='Enter Your Password' required />
          <button className='outline-none bg-emerald-600 border-2 border-emerald-600 py-3 px-5 text-xl rounded-xl placeholder:text-white mt-5'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login;