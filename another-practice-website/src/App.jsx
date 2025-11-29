// App.jsx

import React, { useState, useEffect } from 'react';
// Assuming your CSS is imported globally or named appropriately.
// import './templatemo-neural-style.css'; 

/**
 * Functional component for the NeuralGlass interface.
 * Contains the entire structure converted from the provided HTML.
 */
function App() {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Basic implementation of the original JavaScript's body class toggle
  useEffect(() => {
    // This is a placeholder for any dynamic script logic, 
    // such as scroll effects or menu toggling.
    // In a real React app, you'd handle specific DOM interactions here.
    const handleScroll = () => {
      // Example: Adding a class to body on scroll, if needed
      // document.body.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Component for the complex animated logo SVG
  const LogoSvg = () => (
    <svg className="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#e0a3ff' }} />
          <stop offset="50%" style={{ stopColor: '#ff69b4' }} />
          <stop offset="100%" style={{ stopColor: '#9370db' }} />
        </linearGradient>
      </defs>
      {/* Note: React uses camelCase for SVG attributes like attributeName, dur, etc. */}
      <circle cx="50" cy="30" r="8" fill="url(#logoGradient)" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="60" r="6" fill="url(#logoGradient)" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="65" r="7" fill="url(#logoGradient)" opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <line x1="50" y1="30" x2="30" y2="60" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="50" y1="30" x2="70" y2="65" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
      </line>
      <line x1="30" y1="60" x2="70" y2="65" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" />
      </line>
    </svg>
  );

  return (
    <>
      {/* Epic Neural Background */}
      <div className="neural-background"></div>

      {/* Floating Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Neural Network Lines */}
      <div className="neural-lines">
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
      </div>

      {/* Header */}
      <header className="glass">
        <nav>
          <a href="#home" className="logo">
            <LogoSvg />
            NEURALGLASS
          </a>
          <ul className="nav-links">
            <li><a href="#features">Neural</a></li>
            <li><a href="#showcase">Matrix</a></li>
            <li><a href="#timeline">Evolution</a></li>
            <li><a href="#contact">Connect</a></li>
            <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="external-link">External</a></li>
          </ul>
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </nav>
        {/* Mobile Nav Menu - Use state to control visibility */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={toggleMenu}>Neural</a>
          <a href="#showcase" onClick={toggleMenu}>Matrix</a>
          <a href="#timeline" onClick={toggleMenu}>Evolution</a>
          <a href="#contact" onClick={toggleMenu}>Connect</a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="external-link" onClick={toggleMenu}>External</a>
        </div>
      </header>
      
      {/* --- Section 1: Hero --- */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-subtitle">Welcome to the Future</div>
          <h1>NEURAL INTERFACE</h1>

          <div className="hero-description">
            <p>Experience the convergence of consciousness and technology through quantum-enhanced glassmorphism interfaces. Step into a reality where digital dreams become tangible experiences, transcending the boundaries between mind and machine.</p>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">99.9%</span>
              <span className="hero-stat-label">Neural Sync Rate</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">∞</span>
              <span className="hero-stat-label">Processing Power</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">0.001</span>
              <span className="hero-stat-label">Latency (ms)</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">24/7</span>
              <span className="hero-stat-label">Neural Access</span>
            </div>
          </div>

          <div className="cta-buttons">
            <a href="#features" className="cta-button">Initialize Neural Link</a>
            <a href="#showcase" className="cta-button secondary">Explore Matrix</a>
          </div>
        </div>
      </section>
      
      {/* --- Section 2: Diagonal Features --- */}
      <section className="features" id="features">
        <div className="features-container">
          <h2 className="section-title">QUANTUM CAPABILITIES</h2>
          <div className="diagonal-grid">
            <div className="feature-row">
              <div className="feature-content glass">
                <div className="feature-icon">🧠</div>
                <h3>Neural Processing</h3>
                <p>Advanced AI-driven interfaces that adapt to your consciousness patterns, creating personalized digital experiences that evolve with your neural pathways.</p>
              </div>
              <div className="feature-visual glass"></div>
            </div>

            <div className="feature-row">
              <div className="feature-content glass">
                <div className="feature-icon">⚡</div>
                <h3>Quantum Speed</h3>
                <p>Instantaneous data processing through quantum tunneling algorithms, delivering response times that exist outside conventional spacetime constraints.</p>
              </div>
              <div className="feature-visual glass"></div>
            </div>

            <div className="feature-row">
              <div className="feature-content glass">
                <div className="feature-icon">🌐</div>
                <h3>Dimensional Sync</h3>
                <p>Seamless synchronization across multiple reality layers, ensuring your digital presence remains consistent throughout parallel dimensions.</p>
              </div>
              <div className="feature-visual glass"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Hexagonal Showcase --- */}
      <section className="showcase" id="showcase">
        <h2 className="section-title">MATRIX PROTOCOLS</h2>
        <div className="hexagon-container">
          <div className="hexagon">
            <div className="hexagon-inner glass">
              <div className="hexagon-icon">🔮</div>
              <h4>Holographic UI</h4>
              <p>3D interfaces projected into reality space</p>
            </div>
          </div>
          <div className="hexagon">
            <div className="hexagon-inner glass">
              <div className="hexagon-icon">🛡️</div>
              <h4>Quantum Security</h4>
              <p>Unbreakable encryption protocols</p>
            </div>
          </div>
          <div className="hexagon">
            <div className="hexagon-inner glass">
              <div className="hexagon-icon">🚀</div>
              <h4>Warp Navigation</h4>
              <p>Instant travel between data nodes</p>
            </div>
          </div>
          <div className="hexagon">
            <div className="hexagon-inner glass">
              <div className="hexagon-icon">💎</div>
              <h4>Crystal Storage</h4>
              <p>Infinite capacity data crystals</p>
            </div>
          </div>
          <div className="hexagon">
            <div className="hexagon-inner glass">
              <div className="hexagon-icon">🎯</div>
              <h4>Neural Targeting</h4>
              <p>Thought-based interaction systems</p>
            </div>
          </div>
          <div className="hexagon">
            <div className="hexagon-inner glass">
              <div className="hexagon-icon">⭐</div>
              <h4>Stellar Network</h4>
              <p>Galactic-scale connectivity matrix</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Timeline --- */}
      <section className="timeline" id="timeline">
        <h2 className="section-title">EVOLUTION TIMELINE</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-content glass">
              <div className="timeline-year">2024</div>
              <h4>Genesis Protocol</h4>
              <p>NeuralGlass is a cutting-edge cyberpunk glassmorphism HTML template featuring a striking purple, pink, and green color palette with futuristic neural network aesthetics.</p>
            </div>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content glass">
              <div className="timeline-year">2025</div>
              <h4>Matrix Integration</h4>
              <p>Built with pure HTML/CSS and vanilla JavaScript, it offers smooth scrolling, mobile-responsive navigation with hamburger menu, parallax effects, and dynamic visual elements that respond to user interaction.</p>
            </div>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content glass">
              <div className="timeline-year">2026</div>
              <h4>Quantum Leap</h4>
              <p>This HTML CSS template is brought to you by TemplateMo website. Perfect for tech startups, AI companies, gaming platforms, or any project requiring a bold, futuristic web presence.</p>
            </div>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content glass">
              <div className="timeline-year">2027</div>
              <h4>Neural Singularity</h4>
              <p>Human consciousness successfully merges with AI systems, creating hybrid intelligences that transcend biological limitations.</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        </div>
      </section>

      {/* --- Section 5: Contact --- */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-info glass">
            <h3>ESTABLISH CONNECTION</h3>
            <p>Ready to interface with the future? Our neural network specialists are standing by to guide you through the quantum realm of possibilities.</p>
            <p>Connect through the dimensional gateway and let us initialize your journey into the digital consciousness matrix.</p>

            <div className="social-links">
              <a href="#" className="glass">📡</a>
              <a href="#" className="glass">🌐</a>
              <a href="#" className="glass">💬</a>
              <a href="#" className="glass">📨</a>
            </div>
          </div>

          <div className="contact-form glass">
            {/* Form actions and submission will need a state/handler in a complete React app */}
            <form onSubmit={(e) => e.preventDefault()}> 
              <div className="form-group">
                <input type="text" placeholder="Neural ID (Name)" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Quantum Channel (Email)" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Mission Objective (Subject)" required />
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="Transmission Data (Message)" required></textarea>
              </div>
              <button type="submit" className="submit-btn">TRANSMIT TO MATRIX</button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="#features">Neural Networks</a>
            <a href="#showcase">Matrix Protocols</a>
            <a href="#timeline">Evolution</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Documentation</a>
            {/* Add external links */}
            <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2025 NeuralGlass Interface. All quantum rights reserved across dimensions.</p>
          </div>
          <div className="footer-design">
            Design: <a href="https://templatemo.com" target="_blank" rel="nofollow noopener noreferrer">TemplateMo</a> |
            Enhanced by Neural AI Systems |
            <a href="#">Quantum Framework</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;