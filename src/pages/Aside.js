import React from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {
  return (
    <>
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">NGENZI M. Herve</span>
                </Link>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    {/* <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Intro</span>
                        </a>
                    </li> */}
                    <li>
                        <Link to="/about" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Me & Skills</span> 
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/projects" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Side Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Contact</span> </Link>
                    </li>
                </ul>
                <hr/>
              
            </div>
        </div>
    
    </>
  )
}
