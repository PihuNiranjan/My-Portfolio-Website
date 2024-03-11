import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'

import { Link } from 'react-router-dom'

import image from '/dash-bg.jpg'
import homeLogo from '/home-main.svg'


export default function Dashboard() {
    const { user } = useContext(UserContext)

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
    };

    return (<>

        <div style={{ backgroundImage: `url(${image})`, width: '1240px', height: '100%', position: "fixed" }}>

            {/* --------------------------------------NAVIGATION BAR---------------------------------- */}

            <div style={{ flex: 1, display: 'flex', flexDirection: 'row', height: '80px' }}>
                <div style={{ flex: 0.3 }}>
                    <h1 style={{ margin: 0, padding: "10px 30px", color: 'white', fontSize: '30px' }}>PN</h1>
                </div>
                <div style={{ flex: 0.7, flexDirection: 'row', fontSize: '20px' }}>
                    <ul style={{ float: "right", paddingRight: '30px' }} >
                        <li style={{ display: 'inline-block', padding: '5px 10px' }}> <Link style={linkStyle} to='/dashboard'> Home</Link></li>
                        <li style={{ display: 'inline-block', padding: '5px 10px', color: "white" }}><Link style={linkStyle} to='/about'>About</Link></li>
                        <li style={{ display: 'inline-block', padding: '5px 10px', color: "white" }}><Link style={linkStyle} to='/project'>Project</Link></li>
                        <li style={{ display: 'inline-block', padding: '5px 10px', color: "white" }}><Link style={linkStyle} to='/resume'>Resume</Link></li>
                        <li style={{ display: 'inline-block', padding: '5px 10px', color: "white" }}><Link style={linkStyle} to='/'>Logout</Link></li>
                    </ul>
                </div>
            </div>

            {/* SECOND ROW HAVING TWO SECTION */}

            <div style={{ flex: 1, display: 'flex', flexDirection: 'colomn', padding: "30px" }}>
                <div style={{ flex: 0.65, color: "white", display: 'flex', alignItems: 'center', marginLeft: '40px', height: '400px' }}>

                    <h1 style={{ paddingBottom: 15, fontSize: '40px', display: 'block' }} >
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span><br />
                        I'M
                        <strong style={{ color: "orange" }}> PIYUSH NIRANJAN</strong>
                    </h1>


                </div>
                <div style={{ flex: 0.35, padding: '20px', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={homeLogo}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                </div>
            </div>

        </div>
    </>
    )
}
