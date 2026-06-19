import { Zap, Shield, Lightbulb, Users } from 'lucide-react';
import './WhyUs.css';

export default function WhyUs() {
  return (
    <section id="why">
      <div className="max-w">
        <div className="section-header fade-in visible" style={{ textAlign: 'center' }}>
          <div className="section-label">Our Advantage</div>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>We combine technical excellence with strategic thinking to deliver solutions that matter.</p>
        </div>
        
        <div className="why-grid">
          <div className="why-card fade-in visible">
            <span className="icon"><Zap size={32} /></span>
            <h4>Fast Execution</h4>
            <p>Agile methodologies ensure rapid delivery without compromising on quality.</p>
          </div>
          <div className="why-card fade-in visible" style={{ transitionDelay: '0.1s' }}>
            <span className="icon"><Shield size={32} /></span>
            <h4>Robust Security</h4>
            <p>Enterprise-grade security protocols implemented at every layer of your application.</p>
          </div>
          <div className="why-card fade-in visible" style={{ transitionDelay: '0.2s' }}>
            <span className="icon"><Lightbulb size={32} /></span>
            <h4>Modern Tech Stack</h4>
            <p>We use the latest proven technologies to build future-proof solutions.</p>
          </div>
          <div className="why-card fade-in visible" style={{ transitionDelay: '0.3s' }}>
            <span className="icon"><Users size={32} /></span>
            <h4>Dedicated Support</h4>
            <p>Ongoing maintenance and support to ensure your systems run flawlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
