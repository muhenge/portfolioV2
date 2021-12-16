import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { faHome, faAddressCard, faLaptopCode, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './aside.css'
import classes from './Aside.module.css'
export default function Aside() {
  return (
      
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 border-end px-0 bg-light animate__animated animate__fadeInLeft position-sticky top-0 start-0 h-100">
            <div class="d-flex flex-column align-items-center align-content-between align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <NavLink  to="/" class="d-flex align-items-center pb-3 mb-md-0 pb-3 menu me-md-auto text-dark text-decoration-none">
                    <FontAwesomeIcon icon={faHome} size="2x"></FontAwesomeIcon> <span class="fs-5 d-none d-sm-inline">NGENZI M. Herve</span>
                </NavLink>
                <hr />
                <ul class="nav nav-pills flex-column w-100" id="menu">
                    <li className="nav-item border border-3 menu w-100 mb-5">
                        <Link to="/about" class="nav-link text-dark link">
                            <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon> <span class="ms-1 d-none d-sm-inline">Me & Skills</span> 
                        </Link>
                    </li>
                    <li className="nav-item nav-item border border-3 w-100 mb-5">
                        <Link to="/projects" class="nav-link text-dark link">
                        <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon> <span class="ms-1 d-none d-sm-inline">Side Projects</span>
                        </Link>
                    </li>
                    <li className="nav-item nav-item border border-3 w-100 mb-5">
                        <Link to="/contact" class="nav-link text-dark link">
                        <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon> <span class="ms-1 d-none d-sm-inline">Contact</span> </Link>
                    </li>
                </ul>
                <div>
                    <a href="test" className="btn btn-outline-dark btn-block text-center" id="LinkedIn"></a>
                </div>
                <hr/>
                    
            </div>
        </div>
    
    </>
  )
}
