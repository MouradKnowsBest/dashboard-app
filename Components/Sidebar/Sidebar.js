import React from 'react'
import iconDashboard from './analytics.svg'
import {Link} from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
    return (

    
        <nav className="sidenav">

            <img src={iconDashboard} />

            <Link to="/"> FINANCES </Link>
            <Link to="/dashboardEmployees"> EMPLOI </Link>

        </nav>

        
    )
}
