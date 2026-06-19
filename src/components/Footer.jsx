import logoImg from '../assets/WhatsApp_Image_2026-06-17_at_1.46.55_PM-removebg-preview.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={logoImg} alt="Need Technosoft Logo" className="footer-logo-img" />
          </div>
          <p>Delivering cutting-edge digital solutions to transform businesses and drive meaningful growth.</p>
        </div>
        
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#services">Software Development</a></li>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Mobile Apps</a></li>
            <li><a href="#services">UI/UX Design</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#why">Why Choose Us</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#contact">Careers</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div>&copy; {currentYear} Need Technosoft Pvt. Ltd. All rights reserved.</div>

      </div>
    </footer>
  );
}
