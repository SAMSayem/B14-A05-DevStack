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

  function Hero() {
  const scrollToTechnologies = () => {
    document
      .getElementById('technologies')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  const gradientTextStyle = {
    backgroundImage: GRADIENT,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <section
      id="home"
      className="hero-section">
      <div className="container hero-grid">

        <div className="hero-copy">

          <p className="eyebrow">
            BUILD YOUR PERFECT DEVELOPER TOOLKIT
          </p>

          <h1>
            Build your stack{' '}
            <span
              className="gradient-text"
              style={gradientTextStyle}>
              with confidence.
            </span>
          </h1>

          <p className="hero-description">
            Explore popular technologies, compare the basics,
            and add the tools you need to your own development stack.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              style={{ backgroundImage: GRADIENT }}
              onClick={scrollToTechnologies} >
              Explore Technologies
            </button>

            <a
              className="secondary-button"
              href="#about">
              Learn More
            </a>

          </div>

          <div className="hero-points">
            <span>✓ Beginner friendly</span>
            <span>✓ Modern tools</span>
            <span>✓ Build your stack</span>
          </div>

        </div>

        <div className="hero-image-wrap">

          <div className="soft-blob soft-blob-one"></div>

          <div className="soft-blob soft-blob-two"></div>

          <img
            className="hero-image"
            src="/assets/banner-stack.png"
            alt="Illustration of a modern technology stack"/>

        </div>

      </div>
    </section>
  );
}