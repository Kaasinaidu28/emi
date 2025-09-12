import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './Nav.css';


const Navbar = () => {
  return (
    <div>
      <div className='navbar-expand-lg navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
        <div className='navbar-brand'>Shopper</div>
        <div className='navbar-collapse collapse mb-2 me-auto'>
          <ul className='navbar-nav d-flex flex-row'>
            <li className='nav-item dropdown'>
              <a href="" className='dropdown-toggle nav-link' data-bs-toggle='dropdown'>Electronics</a>
              <ul className='dropdown-menu'>
                <li><a href="" className='dropdown-item'>Tv</a></li>
                 <li><a href="" className='dropdown-item'>Fridge</a></li>
                  <li><a href="" className='dropdown-item'>Tv</a></li>
                   <li><a href="" className='dropdown-item'>Tv</a></li>
              </ul>

            </li>


            <li className='nav-item dropdown'>
              <a href="" className='dropdown-toggle nav-link'>Fashion</a>
              <ul className='dropdown-menu'>
                <li className='dropdown-submenu'>
                  <a href="" className='dropdown-item dropdown-toggle'>Men Fashion</a>
                  <ul className='dropdown-menu'>
                    <li><a href="" className='dropdown-item'>Jeans</a></li>
                       <li><a href="" className='dropdown-item'>Shirts</a></li>
                          <li><a href="" className='dropdown-item'>Jeans</a></li>
                  </ul>
                </li>
                <li className='dropdown-item'>Women Fashion</li>
                   <li className='dropdown-item'>Kids</li>

              </ul>
            </li>


          </ul>
        </div>


      </div>
      </div>
    </div>
  )
}

export default Navbar

