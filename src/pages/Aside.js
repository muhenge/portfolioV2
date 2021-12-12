import React from 'react'
import { Link } from 'react-router-dom'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Aside() {
  return (
    <>
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 border-end px-0 bg-light animate__animated animate__fadeInLeft position-sticky top-0 start-0 h-100">
            <div class="d-flex flex-column align-items-center align-content-between align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="/" class="d-flex align-items-center pb-3 mb-md-0 pb-5  me-md-auto text-dark text-decoration-none">
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <span class="fs-5 d-none d-sm-inline">NGENZI M. Herve</span>
                </Link>
                <ul class="nav nav-pills flex-column w-100" id="menu">
                    {/* <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Intro</span>
                        </a>position-sticky
                    </li> */}
                    <li class="nav-item bg-dark w-100 mb-3 text-center">
                        <Link to="/about" class="nav-link text-light">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Me & Skills</span> 
                        </Link>
                        
                    </li>
                    <li class="nav-item nav-item bg-dark w-100 mb-3 text-center">
                        <Link to="/projects" class="nav-link text-light">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Side Projects</span>
                        </Link>
                    </li>
                    <li class="nav-item nav-item bg-dark w-100 mb-3 text-center">
                        <Link to="/contact" class="nav-link text-light">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Contact</span> </Link>
                    </li>
                </ul>
                <div>

                </div>
                <hr/>
                    
            </div>
        </div>
    
    </>
  )
}
