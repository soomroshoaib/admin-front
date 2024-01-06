import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className='Logo-brand'>
            <NavLink to="/"> logo </NavLink>
          </div>
          <nav>
            <ul>
              <li> <NavLink to="/">Home  </NavLink></li>
              <li> <NavLink to="/Service">Service  </NavLink> </li>
              <li> <NavLink to="/About"> About  </NavLink></li>
              <li> <NavLink to="/Contact">Contact   </NavLink></li>
              <li> <NavLink to="/Login"> Login  </NavLink></li>
              <li> <NavLink to="/Register"> Register  </NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar