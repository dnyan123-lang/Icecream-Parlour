import './Menu.css';

const iceCreams = [
  { id: 1, name: "Classic Vanilla", price: "₹90", image: "https://www.eis-perfecto.de/wp-content/uploads/2019/02/Klassiches-Vanille-Eis-mit-Ei-848x477.jpg", desc: "Smooth and creamy Madagascar vanilla." },
  { id: 2, name: "Chocolate Fudge", price: "₹120", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovWQjW8eqtOUNGlvMHDqZ02Sm6DEFptYV1A&s", desc: "Rich Belgian chocolate with dark fudge swirls." },
  { id: 3, name: "Strawberry Bliss", price: "₹100", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop", desc: "Made with real, fresh organic strawberries." },
  { id: 4, name: "Mint Choco Chip", price: "₹130", image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=500&auto=format&fit=crop", desc: "Cool peppermint with dark chocolate chunks." },
  { id: 5, name: "Cookie Dough", price: "₹140", image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=500&auto=format&fit=crop", desc: "Vanilla loaded with chocolate chip cookie dough." },
  { id: 6, name: "Mango Sorbet", price: "₹110", image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?w=500&auto=format&fit=crop", desc: "Sweet, incredibly refreshing Alphonso mango." },
  { id: 7, name: "Butterscotch", price: "₹100", image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=500&auto=format&fit=crop", desc: "Crunchy praline mixed into caramel ice cream." },
  { id: 8, name: "Pistachio Almond", price: "₹150", image: "https://thumbs.dreamstime.com/b/three-scoops-creamy-pistachio-almond-ice-cream-refreshing-cold-dessert-nuts-green-brown-almonds-scattered-around-403946572.jpg", desc: "Roasted pistachios and almonds in a creamy base." },
  { id: 9, name: "Coffee Mocha", price: "₹120", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2e88oZP0BEAmhMi62j9GxKR7C38qXa3xBg&s", desc: "Strong espresso blended with sweet cocoa." },
  { id: 10, name: "Blueberry Cheese", price: "₹160", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop", desc: "Cream cheese base with a wild blueberry swirl." },
  { id: 11, name: "Black Currant", price: "₹110", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop", desc: "Tangy and sweet, bursting with berry flavor." },
  { id: 12, name: "Tutti Frutti", price: "₹90", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlIB-3-_bm1mRboPJobBssGFBJqVagYUQng&s", desc: "A nostalgic classic with candied fruits." },
  { id: 13, name: "Cotton Candy", price: "₹100", image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=500&auto=format&fit=crop", desc: "Pink and blue swirls of carnival perfection." },
  { id: 14, name: "Kesar Pista", price: "₹150", image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=500&auto=format&fit=crop", desc: "Traditional Indian saffron and pistachio delight." },
  { id: 15, name: "Rajbhog", price: "₹160", image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=500&auto=format&fit=crop", desc: "Premium dry fruits, honey, and saffron strands." },
  { id: 16, name: "Belgian Dark", price: "₹180", image: "https://5.imimg.com/data5/SELLER/Default/2023/3/UM/MI/JG/13714945/hei-ice-cream.jpeg", desc: "Intense 70% dark chocolate for true cocoa lovers." },
  { id: 17, name: "Tender Coconut", price: "₹130", image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?w=500&auto=format&fit=crop", desc: "Fresh coconut bits in a mild, milky base." },
  { id: 18, name: "Paan Royale", price: "₹120", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop", desc: "Refreshing betel leaf with gulkand (rose petal jam)." },
  { id: 19, name: "Roasted Almond", price: "₹140", image: "https://static.toiimg.com/thumb/53520122.cms?width=1200&height=900", desc: "Slow-roasted almonds folded into sweet cream." },
  { id: 20, name: "Rocky Road", price: "₹150", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5b4oRGblt9wcyxhXWEgKiAM4ItO7dKYwZAQ&s", desc: "Chocolate ice cream with marshmallows and nuts." }
];

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Our <span>Signature</span> Menu</h2>
        <p>Explore our 20 hand-crafted flavors, made fresh daily.</p>
      </div>

      <div className="menu-grid">
        {iceCreams.map((item) => (
          <div className="menu-card" key={item.id}>
            
            <img src={item.image} alt={item.name} className="menu-image" />
            
            <div className="card-content">
              <h3>{item.name}</h3>
              <p className="card-desc">{item.desc}</p>
              <div className="card-footer">
                <span className="price">{item.price}</span>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;