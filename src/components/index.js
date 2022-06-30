import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <ul class='navBar'>
                <Link to="/" activeStyle>
                    Home
                </Link>
                <Link to="/OurTeam" activeStyle>
                    Our Team
                </Link>
                <Link to="/OurWork" activeStyle>
                    Our Work
                </Link>
                <Link to="/Careers" activeStyle>
                    Careers
                </Link>
                <Link to="/Contact" activeStyle>
                    Contact
                </Link>
            </ul>
        </>
    )
}

export default NavBar