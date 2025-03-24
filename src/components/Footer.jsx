import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-logo">netraya.</h2>
        <ul className="footer-links">
          <li><a href="#about" className="footer-link">About Us</a></li>
          <li><a href="#services" className="footer-link">Our Services</a></li>
          <li><a href="#articles" className="footer-link">Research Articles</a></li>
          <li><a href="#request-demo" className="footer-link">Request Demo</a></li> {/* Ensure the section exists or update this if not needed */}
          <li><a href="#contact" className="footer-link">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <p>Have research to share? Send your articles to us. We welcome contributions that advance the understanding and innovation in diabetic retinopathy detection and related fields.</p>
        <div className="subscribe-section">
          <input type="email" placeholder="Enter your email" className="subscribe-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
        <small className="footer-disclaimer">
          By subscribing you agree to provide consent to receive updates from our company.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
