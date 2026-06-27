import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>NB <span>IceCream</span></h2>
          <p>Crafting sweet memories and premium, hand-churned scoops of joy daily with love and the finest ingredients.</p>
          
        
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/flavors">Flavors</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-hours">
          <h3>Opening Hours</h3>
          <p><span>Mon - Fri:</span> 11:00 AM - 11:00 PM</p>
          <p><span>Sat - Sun:</span> 11:00 AM - 12:00 AM</p>
        </div>

        <div className="footer-location">
          <h3>Our Location</h3>
          <p>123 Sweet Street, Dessert District, Food City</p>
          <div className="footer-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30371.790043474415!2d76.79210870299677!3d17.910044066391407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf409bcdf2b3af%3A0xb579a1d70f05e8ce!2sNelwad%2C%20Maharashtra%20413607!5e0!3m2!1sen!2sin!4v1782533107203!5m2!1sen!2sin" 
              width="100%" 
              height="160" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 NB IceCream. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;