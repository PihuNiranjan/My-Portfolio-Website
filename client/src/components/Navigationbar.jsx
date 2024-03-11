import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigationbar() {
  return (
    <nav>
      <label class="logo">DesignX</label>
      <ul>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/register'>Register</Link></li>
        <li> <Link to='/login'>Login</Link></li>
        {/* <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li> */}
      </ul>

    </nav>
  )
}