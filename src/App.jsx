import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const GRADIENT =
  'linear-gradient(90deg, #f97316 0%, #ec4899 55%, #8b5cf6 100%)';



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSignIn = () => {
    toast.info('Sign In is ready for your authentication logic.');
  };

  const handleSignUp = () => {
    toast.success('Welcome to Dev Stack!');
  };

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}>
          ☰
        </button>

        <a
          className="brand"
          href="#home"
          onClick={closeMenu}>
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack logo"/>
        </a>

        <div
          className={`nav-links ${
            menuOpen ? 'nav-links-open' : ''
          }`}>
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
            onClick={handleSignIn}>
            Sign In
          </button>

          <button
            className="signup-button"
            style={{ backgroundImage: GRADIENT }}
            onClick={handleSignUp}>
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
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
              onClick={scrollToTechnologies}>
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



function TechnologyCard({
  technology,
  selected,
  onAdd,
}) {
  const handleAdd = () => {
    onAdd(technology);
  };

  return (
    <article className="technology-card">

      <div className="card-top">

        <div className="icon-box">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}/>
        </div>

        <span className="badge">
          {technology.badge}
        </span>

      </div>

      <h3>
        {technology.name}
      </h3>

      <p className="card-description">
        {technology.description}
      </p>

      <div className="card-info">

        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

      </div>

      <div className="card-footer">

        <span className="rating">
          ★ {technology.rating}
        </span>

        <button
          className="add-button"
          disabled={selected}
          onClick={handleAdd}>
          {selected
            ? '✓ Added to Stack'
            : 'Add to Stack'}
        </button>

      </div>

    </article>
  );
}


function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}) {
  return (
    <aside className="stack-sidebar">

      <div className="stack-header">

        <div>

          <p className="stack-label">
            YOUR SELECTION
          </p>

          <h2>
            Your Stack
          </h2>

        </div>

        <span className="count-badge">
          {stack.length}
        </span>

      </div>

      <p className="selected-text">
        {stack.length}{' '}
        {stack.length === 1
          ? 'Technology Selected'
          : 'Technologies Selected'}
      </p>

      {stack.length === 0 ? (

        <div className="empty-stack">

          <div className="empty-icon">
            ＋
          </div>

          <p>
            Your stack is empty.
          </p>

          <span>
            Add technologies to see them here.
          </span>

        </div>

      ) : (

        <div className="stack-items">

          {stack.map((technology) => (

            <div
              className="stack-item"
              key={technology.id}>

              <img
                src={technology.icon}
                alt=""/>

              <div className="stack-item-text">

                <strong>
                  {technology.name}
                </strong>

                <span>
                  {technology.category}
                </span>

              </div>

              <button
                className="remove-button"
                onClick={() =>
                  onRemove(technology.id)
                }
                aria-label={`Remove ${technology.name}`}>
                ×
              </button>

            </div>

          ))}

          <button
            className="remove-all-button"
            onClick={onRemoveAll}>
            Remove All
          </button>

        </div>

      )}

    </aside>
  );
}



function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load data');
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error(
          'Could not load technologies.'
        );

        setLoading(false);
      });
  }, []);



  const addToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack.`
    );
  };

  

  const removeFromStack = (id) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((currentStack) =>
      currentStack.filter(
        (item) => item.id !== id
      )
    );

    toast.info(
      `${removedTechnology?.name || 'Technology'} removed from your stack.`
    );
  };

  

  const removeAll = () => {
    if (stack.length === 0) {
      toast.info(
        'Your stack is already empty.'
      );

      return;
    }

    setStack([]);

    toast.info(
      'All technologies removed from your stack.'
    );
  };

  return (
    <section
      id="technologies"
      className="technology-section"
    >
      <div className="container">

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              EXPLORE THE TOOLS
            </p>

            <h2>
              Explore the{' '}
              <span
                className="gradient-text"
                style={{
                  backgroundImage: GRADIENT,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}>
                Technologies
              </span>
            </h2>

          </div>

          <p>
            Choose the tools that match your project
            and build a stack that makes sense for you.
          </p>

        </div>

        {loading ? (

          <div className="loading-state">

            <div className="spinner"></div>

            <p>
              Loading technologies...
            </p>

          </div>

        ()

          <div className="technology-layout">

            <div className="technology-grid">

              {technologies.map((technology) => (

                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  selected={stack.some(
                    (item) =>
                      item.id === technology.id
                  )}
                  onAdd={addToStack}
                />

              ))}

            </div>

            <StackSidebar
              stack={stack}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}/>

          </div>

        )}

      </div>
    </section>
  );
}



function SimpleInfoSections() {
  return (
    <>

      <section
        id="projects"
        className="info-section muted-section">
        <div className="container info-grid">

          <div>

            <p className="eyebrow">
              PROJECTS
            </p>

            <h2>
              Start with the right foundation.
            </h2>

          </div>

          <p>
            Use your selected technologies as a
            simple starting point for portfolio sites,
            dashboards, APIs, e-commerce projects,
            and more.
          </p>

        </div>
      </section>

      <section
        id="about"
        className="info-section">
        <div className="container info-grid">

          <div>

            <p className="eyebrow">
              ABOUT DEV STACK
            </p>

            <h2>
              Simple choices. Clear learning path.
            </h2>

          </div>

          <p>
            Dev Stack is a small learning project
            that helps beginners understand where
            common frontend, backend, database,
            styling, DevOps, and developer tools
            fit together.
          </p>

        </div>
      </section>

      <section
        id="contact"
        className="info-section muted-section">
        <div className="container contact-box">

          <div>

            <p className="eyebrow">
              CONTACT
            </p>

            <h2>
              Keep building and keep learning.
            </h2>

            <p>
              Connect the tools, test your ideas,
              and grow your development skills one
              project at a time.
            </p>

          </div>

          <a
            className="secondary-button"
            href="mailto:hello@devstack.example">
            Contact Dev Stack
          </a>

        </div>
      </section>

    </>
  );
}


function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <img
            src="/assets/logo-text.png"
            alt="Dev Stack logo"/>

          <p>
            Curated tools, technologies, and resources
            for developers building modern software.
          </p>

          <div className="social-links">

            <a href="https://github.com/"
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>

            <a href="https://twitter.com/"
              target="_blank"
              rel="noreferrer">
              Twitter
            </a>

            <a href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer">
              LinkedIn
            </a>

          </div>

        </div>

        <div className="footer-links">

          <div>

            <h4>
              Product
            </h4>

            <a href="#technologies">
              Technologies
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#home">
              Builder
            </a>

          </div>

          <div>

            <h4>
              Company
            </h4>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

            <a href="#home">
              Home
            </a>

          </div>

          <div>

            <h4>
              Legal
            </h4>

            <a href="#home">
              Privacy
            </a>

            <a href="#home">
              Terms
            </a>

            <a href="#home">
              License
            </a>

          </div>

        </div>

      </div>

      <div className="container footer-bottom">

        <span>
          © 2026 Dev Stack. All rights reserved.
        </span>

        <div>

          <a href="#home">
            Privacy
          </a>

          <a href="#home">
            Terms
          </a>

        </div>

      </div>

    </footer>
  );
}


export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Technologies />

        <SimpleInfoSections />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover/>
    </>
  );
}