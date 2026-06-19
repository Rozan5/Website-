import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w">
        <div className="section-header fade-in visible">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-sub">Have a project in mind? Tell us about it — we'll get back to you within 24 hours.</p>
        </div>
        
        <div className="contact-wrapper">
          <div className="contact-info fade-in visible">
            <h3>Contact Information</h3>
            <p>Reach us through any of the channels below and our team will be happy to help you.</p>
            
            <div className="contact-detail">
              <div className="contact-detail-icon"><MapPin size={24} /></div>
              <div className="contact-detail-text">
                <strong>Address</strong>
                <span>Pipal Chowk, Biratnagar, Nepal</span>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="contact-detail-icon"><Phone size={24} /></div>
              <div className="contact-detail-text">
                <strong>Phone</strong>
                <span>+977  9852078275</span>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="contact-detail-icon"><Mail size={24} /></div>
              <div className="contact-detail-text">
                <strong>Email</strong>
                <span>info@needtechnosoft.com.np<br/>needtechnosoft@gmail.com</span>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="contact-detail-icon"><Clock size={24} /></div>
              <div className="contact-detail-text">
                <strong>Business Hours</strong>
                <span>Sun – Fri: 10:00 AM – 5:00 PM<br/>Saturday: Closed</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form fade-in visible" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+977 ..." required />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              
              <div className="form-group">
                <label>Service Needed</label>
                <select required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="ERP / Management System">ERP / Management System</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="IT Support & Consulting">IT Support & Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Tell us about your project..." required></textarea>
              </div>
              
              <button type="submit" className="btn-submit">Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
