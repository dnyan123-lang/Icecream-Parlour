import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get In <span>Touch</span></h2>
        <p>We would love to hear from you! Drop us a message or visit our parlor.</p>
      </div>

      <div className="contact-content">
        {/* Contact Information Side */}
        <div className="contact-info">
          <h3>Visit Our Parlor</h3>
          <p className="info-desc">
            Come experience the magic in person. We are open every day to serve you the freshest scoops in town.
          </p>
          
          <div className="info-block">
            <span className="icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>123 Sweet Street, Dessert District, Food City</p>
            </div>
          </div>

          <div className="info-block">
            <span className="icon">📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-block">
            <span className="icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p>hello@nbicecream.com</p>
            </div>
          </div>

          <div className="info-block">
            <span className="icon">⏰</span>
            <div>
              <h4>Hours</h4>
              <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Send a Message</h3>
            
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            
            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            
            <div className="input-group">
              <input type="text" placeholder="Subject" required />
            </div>
            
            <div className="input-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;