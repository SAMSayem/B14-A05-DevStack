import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const GRADIENT =
  'linear-gradient(90deg, #f97316 0%, #ec4899 55%, #8b5cf6 100%)';


  function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => {
      setMenuOpen(false);
    }
const handleSignIn = () => {
  toast.info('Sign In is ready for your authentication logic.');
}
 const handleSignUp = () => {
  toast.success('Welcome to Dev Stack!');
 }

 return(
  <header className="navbar-wrap">
    <nav className="navbar container">

      <button className="mobile-menu=button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}></button>

      <a className="brand"
      href="#home"
      onClick={closeMenu}>

        <img src="/assets/logo-text.png"
        alt="Dev Stack logo"></img>
      </a>
<div
          className={`nav-links ${
            menuOpen ? 'nav-links-open' : ''
          }`}
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#technologies" onClick={closeMenu}>
            Technologies
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <button
            className="signin-button"
            onClick={handleSignIn}
          >
            Sign In
          </button>

          <button
            className="signup-button"
            style={{ backgroundImage: GRADIENT }}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>


    </nav>

  </header>
 )



  }