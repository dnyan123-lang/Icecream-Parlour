import { Link } from 'react-router-dom';
import heroImg from '../assets/MAIN.jpg';
import './Home.css';

const trendingFlavors = [
  { id: 1, name: "Belgian Dark Chocolate", price: "₹180", img: "data:image/jpeg;base64,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" },
  { id: 2, name: "Fresh Mango Sorbet", price: "₹110", img: "https://images.unsplash.com/photo-1501747315-124a0eaca060?w=500&auto=format&fit=crop" },
  { id: 3, name: "Strawberry Bliss", price: "₹100", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop" }
];

const reviews = [
  { id: 1, text: "The creamiest ice cream I have ever had! The Belgian Dark chocolate is to die for. Absolute perfection.", author: "Priya S." },
  { id: 2, text: "Love the vegan options. The Mango Sorbet tastes exactly like eating a fresh mango on a hot summer day.", author: "Rahul M." },
  { id: 3, text: "My kids drag me here every weekend. The staff is wonderful and the Cookie Dough is packed with chunks!", author: "Anita K." }
];

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="home-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Scoops of <span>Joy</span> in Every Bite!</h1>
            <p>
              Welcome to NB IceCream. Experience the richest, creamiest, and most 
              delightful flavors crafted just for you. Treat yourself today!
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="cta-btn primary">Explore Menu</Link>
              <Link to="/flavors" className="cta-btn secondary">See Flavors</Link>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="floating-blob"></div>
            <img src={heroImg} alt="NB Ice Cream" className="hero-img" />
          </div>
        </div>
      </section>

      <section className="trending-section">
        <div className="section-header">
          <h2>Trending <span>Now</span></h2>
          <p>Our most loved flavors this week.</p>
        </div>
        <div className="trending-grid">
          {trendingFlavors.map(flavor => (
            <div className="trending-card" key={flavor.id}>
              <img src={flavor.img} alt={flavor.name} />
              <h3>{flavor.name}</h3>
              <div className="trending-footer">
                <span className="price">{flavor.price}</span>
                <Link to="/menu" className="mini-btn">Order</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW VIDEO SECTION */}
      <section className="video-section">
        <div className="section-header">
          <h2>See Us in <span>Action</span></h2>
          <p>Watch how the magic is made.</p>
        </div>
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/8Qbax_1szSs" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
      </section>

      <section className="reviews-section">
        <div className="section-header">
          <h2>Sweet <span>Words</span></h2>
          <p>Don't just take our word for it.</p>
        </div>
        <div className="reviews-grid">
          {reviews.map(review => (
            <div className="review-card" key={review.id}>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="review-author">— {review.author}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;