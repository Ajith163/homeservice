import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/index.jsx';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand d-flex align-items-center" to={ROUTES.HOME}>
            <img 
              src={logo} 
              alt="MS IT PARK" 
              className="me-2"
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
            style={{ border: 'none' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link text-dark fw-medium px-3" to={ROUTES.HOME} onClick={() => setIsOpen(false)}>
                Home
              </Link>
              
              <div className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle text-dark fw-medium px-3" 
                  href="#" 
                  role="button" 
                  onClick={toggleDropdown}
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show ' : ''}`}>
                  <li><Link className="dropdown-item text-center" to={ROUTES.SERVICES} onClick={() => { setIsOpen(false); setIsDropdownOpen(false); }}>Services </Link></li>
                  <li><a className="dropdown-item text-center" href="#" onClick={() => { setIsOpen(false); setIsDropdownOpen(false); }}>Products </a></li>
                </ul>
              </div>
              
              <Link className="nav-link text-dark fw-medium px-3" to={ROUTES.ABOUT} onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link className="nav-link text-dark fw-medium px-3" to={ROUTES.CONTACT} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              
              <div className="position-relative mx-3 d-lg-flex align-items-center">
                <i className="bi bi-bell text-muted fs-5 "></i>
                <span className="position-absolute top-0 start-lg-100 translate-middle badge rounded-pill bg-danger ms-lg-3 mt-lg-1" style={{ fontSize: '0.6rem' }}>
                  2
                </span>
              </div>
              
              <Link to={ROUTES.LOGIN} className="btn btn-primary rounded-pill px-4 py-2 fw-medium" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
