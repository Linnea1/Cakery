import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="nav-inner brand-row content">
        <Link to="/" className="brand">
          <img src={logo} alt="Munamii logo" className="brand-logo" />
        </Link>
      </div>
      <div className="nav-row">
        <div className="nav-inner content">
          <Link to="/" className="brand mobile-brand">
            <img src={logo} alt="Munamii logo" className="brand-logo" />
          </Link>

          <nav className={`nav-menu ${open ? 'open' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
              Products
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </nav>

          <button
            className={`hamburger ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
