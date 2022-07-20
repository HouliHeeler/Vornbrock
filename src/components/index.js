import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <ul className='navBar'>
                <Link to="/" activestyle="true">
                    Home
                </Link>
                <Link to="/OurWork" activestyle="true">
                    Our Work
                </Link>
                <Link to="/OurTeam" activestyle="true">
                    Our Team
                </Link>
                <Link to="/Careers" activestyle="true">
                    Careers
                </Link>
                <Link to="/Contact" activestyle="true">
                    Contact
                </Link>
            </ul>
        </>
    )
}

export default NavBar