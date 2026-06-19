import { Code, Globe, Smartphone, Palette, BarChart3, TrendingUp, Wrench } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      desc: 'Custom software solutions tailored to your business needs. From desktop applications to enterprise-grade systems, we build scalable, reliable software that drives efficiency and growth.'
    },
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'High-performance websites and web applications built with cutting-edge technologies like React, Node.js, and modern CSS.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      desc: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'User-centered design solutions that ensure your digital products are intuitive, engaging, and visually stunning.'
    },
    {
      icon: BarChart3,
      title: 'ERP Systems',
      desc: 'Custom enterprise resource planning solutions to streamline your business operations and data management.'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      desc: 'Data-driven marketing strategies, SEO, and social media management to boost your online presence.'
    },
    {
      icon: Wrench,
      title: 'IT Support',
      desc: 'Reliable IT infrastructure support, cloud hosting, and technical consulting to keep your business running.'
    }
  ];

  return (
    <section id="services">
      <div className="max-w">
        <div className="section-header fade-in visible">
          <div className="section-label">Our Expertise</div>
          <h2 className="section-title">Comprehensive Digital Solutions</h2>
          <p className="section-sub">We provide end-to-end technology services to help your business thrive in the digital age.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
            <div className="service-card fade-in visible" style={{ transitionDelay: `${index * 0.1}s` }} key={index}>
              <div className="service-icon"><IconComponent size={32} /></div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}
