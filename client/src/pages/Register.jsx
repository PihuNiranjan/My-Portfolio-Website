import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import Navigationbar from '../components/Navigationbar';



export default function Register() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: ""
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const { name, email, password } = data;
    try {
      const { data } = await axios.post('./register', {
        name, email, password
      })
      if (data.error) {
        toast.error(data.error)
      }
      else {
        setdata({})
        toast.success("Register Successful. Welcome! ")
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  // return (
  //   <div>
  //     <form onSubmit={registerUser}>
  //       <label>Name</label>
  //       <input type='text' placeholder='Enter name...' value={data.name} onChange={(e) => setdata({ ...data, name: e.target.value })} required />
  //       <label>Email</label>
  //       <input type='email' placeholder='Enter email...' value={data.email} onChange={(e) => setdata({ ...data, email: e.target.value })} required />
  //       <label>Password</label>
  //       <input type='password' placeholder='Enter password...' value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })} required />
  //       <button type='submit' >Submit</button>
  //     </form>
  //   </div>
  // )
  return (
    <><Navigationbar />
      <div class='login-body'>
        <div class="login-container">
          <h2>Signup</h2>
          <form class="login-form" onSubmit={registerUser} >
            <input type='text' placeholder='Enter name...' value={data.name} onChange={(e) => setdata({ ...data, name: e.target.value })} required />
            <input type='email' placeholder='Enter email...' value={data.email} onChange={(e) => setdata({ ...data, email: e.target.value })} required />
            <input type='password' placeholder='Enter password...' value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })} required />

            <button type='submit' >Signup</button>
          </form>
        </div>
      </div>
    </>

  )
}
