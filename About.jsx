import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section for About Page */}
      <div className="about-hero">
        <h2>Our <span>Story</span></h2>
        <p>Crafting joy, one scoop at a time since 2024.</p>
      </div>

      {/* Main Content Section */}
      <div className="about-content">
        <div className="about-text">
          <h3>The Magic Behind NB IceCream</h3>
          <p>
            What started as a small dream in a local kitchen has blossomed into NB IceCream—your 
            go-to destination for premium, handcrafted frozen delights. We believe that ice cream 
            isn't just a dessert; it is an experience, a memory, and a momentary escape from the 
            hustle of everyday life.
          </p>
          <p>
            We partner with local dairy farmers and source the finest organic ingredients from 
            around the world. Whether it is Madagascar vanilla beans or fresh strawberries picked 
            at peak ripeness, we refuse to compromise on quality. No artificial flavors, no shortcuts 
            —just pure, unadulterated joy.
          </p>
        </div>
        
        <div className="about-image-wrapper">
          {/* Using a nice Unsplash image of someone scooping ice cream! */}
          <img 
            src="https://images.unsplash.com/photo-1557142046-c704a3adf364?w=800&auto=format&fit=crop" 
            alt="Scooping Ice Cream" 
            className="about-image" 
          />
        </div>
      </div>

      {/* Core Values / Features */}
      <div className="core-values">
        <div className="value-card">
          <div className="value-icon">🌱</div>
          <h4>100% Organic</h4>
          <p>We use only certified organic milk, cream, and cane sugar.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">👩‍🍳</div>
          <h4>Made Fresh Daily</h4>
          <p>Churned every single morning in small batches for maximum freshness.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">🤝</div>
          <h4>Locally Sourced</h4>
          <p>Supporting local farmers and communities with every scoop.</p>
        </div>
      </div>
    </div>
  );
};

export default About;