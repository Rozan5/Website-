import { Check } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="max-w">
        <div className="about-grid">
          <div className="about-content fade-in visible">
            <div className="section-label">About Us</div>
            <h2 className="section-title">Empowering Businesses Through Technology</h2>
            <p className="section-sub" style={{ marginBottom: '28px' }}>
              Based in Biratnagar, Nepal, Need Technosoft Pvt. Ltd. is a premier software development agency. We bridge the gap between complex business challenges and innovative digital solutions.
            </p>
            
            <ul className="about-feature-list">
              <li><div className="check-icon"><Check size={20} /></div> Expert team of developers and designers</li>
              <li><div className="check-icon"><Check size={20} /></div> Tailored solutions for specific business needs</li>
              <li><div className="check-icon"><Check size={20} /></div> Focus on performance, security, and scalability</li>
              <li><div className="check-icon"><Check size={20} /></div> Long-term technical partnership and support</li>
            </ul>
          </div>
          
          <div className="about-visual fade-in visible" style={{ transitionDelay: '0.2s' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--white)', marginBottom: '16px' }}>
              Why Choose Need Technosoft?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7' }}>
              We don't just write code; we build digital ecosystems. Our approach combines deep technical expertise with a thorough understanding of your business objectives to deliver software that provides a real competitive advantage.
            </p>
            
            <div className="about-reg">
              <strong>Need Technosoft Pvt. Ltd.</strong><br/>
              A registered IT company in Nepal<br/>
              Dedicated to excellence in Software &amp; IT Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
