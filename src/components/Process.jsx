import './Process.css';

export default function Process() {
  return (
    <section id="process">
      <div className="max-w">
        <div className="section-header fade-in visible" style={{ textAlign: 'center' }}>
          <div className="section-label">How We Work</div>
          <h2 className="section-title">Our Proven Process</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>A streamlined approach from initial concept to final deployment and beyond.</p>
        </div>
        
        <div className="process-steps">
          <div className="process-step fade-in visible">
            <div className="step-num">1</div>
            <h4>Discovery</h4>
            <p>We analyze your requirements, target audience, and business goals to define project scope.</p>
          </div>
          <div className="process-step fade-in visible" style={{ transitionDelay: '0.1s' }}>
            <div className="step-num">2</div>
            <h4>Design</h4>
            <p>Creating wireframes and UI/UX prototypes to visualize the final product before coding begins.</p>
          </div>
          <div className="process-step fade-in visible" style={{ transitionDelay: '0.2s' }}>
            <div className="step-num">3</div>
            <h4>Development</h4>
            <p>Writing clean, scalable code while keeping you updated with regular progress reports.</p>
          </div>
          <div className="process-step fade-in visible" style={{ transitionDelay: '0.3s' }}>
            <div className="step-num">4</div>
            <h4>Delivery</h4>
            <p>Rigorous testing, deployment to production, and handover with necessary training.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
