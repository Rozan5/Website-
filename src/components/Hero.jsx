import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Floating particles */}
      <div className="hero-particle" style={{ width: '80px', height: '80px', top: '15%', left: '10%' }}></div>
      <div className="hero-particle" style={{ width: '120px', height: '120px', top: '60%', left: '5%', animationDelay: '1s' }}></div>
      <div className="hero-particle" style={{ width: '60px', height: '60px', top: '20%', right: '15%', animationDelay: '2s' }}></div>
      <div className="hero-particle" style={{ width: '150px', height: '150px', bottom: '10%', right: '8%', animationDelay: '1.5s' }}></div>

      <div className="hero-grid">
        <div className="hero-content fade-in visible">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            <span>Innovating Since 2018</span>
          </div>
          <h1>Transform Your Business with <em>Digital Excellence</em></h1>
          <p>We are a leading software development company in Biratnagar, specializing in web, mobile, and enterprise solutions that drive growth.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Start a Project</a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>
        
        <div className="hero-visual fade-in visible" style={{ transitionDelay: '0.2s' }}>
          <div className="hero-stats-card">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-num">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">99%</div>
                <div className="stat-label">Client Retention</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
            
            <hr className="stat-divider" />
            
            <div className="hero-tech-row">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Flutter</span>
              <span className="tech-pill">Python</span>
              <span className="tech-pill">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
