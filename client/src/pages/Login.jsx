import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import Navigationbar from '../components/Navigationbar';

export default function Login() {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    email: "",
    password: ""
  })

  const loginUser = async (e) => {
    e.preventDefault()

    const { email, password } = data
    try {
      const { data } = await axios.post('/login', {
        email, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setdata({})
        toast.success("Login Successful. Welcome! ")
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (<>
    <Navigationbar />
    <div class='login-body'>

      <div class="login-container">
        <h2>Login</h2>
        <form class="login-form" onSubmit={loginUser} >
          <input type='email' placeholder='Enter email...' value={data.email} onChange={(e) => setdata({ ...data, email: e.target.value })} required />
          <input type='password' placeholder='Enter password...' value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })} required />

          <button type='submit' >Login</button>
        </form>
      </div>
    </div>
  </>
  )

}