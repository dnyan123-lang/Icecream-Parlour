import './Flavors.css';

const flavorCategories = [
  {
    id: 1,
    title: "Signature Creams",
    description: "Our incredibly rich, velvety bases are made from locally sourced organic milk and heavy cream. Perfect for those who love a traditional, indulgent scoop.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNd56YiSrbTWACUxYRqgjYdvlsi2u0e9rY-Q&s",
    list: ["Classic Vanilla", "Belgian Dark Chocolate", "Cookie Dough", "Butterscotch"]
  },
  {
    id: 2,
    title: "Refreshing Sorbets",
    description: "100% vegan and dairy-free. We use real, fresh-picked fruits blended with pure cane sugar and filtered water for a light, refreshing treat.",
    image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?w=800&auto=format&fit=crop",
    list: ["Mango Sorbet", "Strawberry Bliss", "Lemon Zest", "Watermelon Splash"]
  },
  {
    id: 3,
    title: "Nutty & Crunchy",
    description: "For those who love some texture! We slow-roast our nuts to bring out their natural oils before folding them into our sweet cream base.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv7SiHcFXSZB6DfTJg6xZp_BKOrvRdUPOsqQ&s",
    list: ["Roasted Almond", "Pistachio Delight", "Hazelnut Crunch", "Pecan Praline"]
  },
  {
    id: 4,
    title: "Indian Heritage",
    description: "Authentic, traditional flavors infused with saffron, cardamom, and premium dry fruits that transport you straight to the heart of India.",
    image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&auto=format&fit=crop",
    list: ["Kesar Pista", "Rajbhog", "Tender Coconut", "Paan Royale"]
  },
  {
    id: 5,
    title: "Chocoholic's Dream",
    description: "A tribute to cocoa. From milky and sweet to intensely dark and bitter, these flavors are crafted exclusively for true chocolate lovers.",
    image: "https://chocoholicscafe.com/wp-content/uploads/chocoholics_dream_waffle.jpg",
    list: ["Triple Fudge Chunk", "White Chocolate Raspberry", "Dark Swiss Truffle", "Spicy Aztec Chocolate"]
  },
  {
    id: 6,
    title: "Coffee House Blends",
    description: "Get your caffeine fix in a scoop. We use cold-brewed espresso and premium teas to create deep, aromatic, and bold flavor profiles.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&auto=format&fit=crop",
    list: ["Espresso Macchiato", "Matcha Green Tea", "Earl Grey Lavender", "Mocha Almond Fudge"]
  },
  {
    id: 7,
    title: "Cake & Cookie Bakery",
    description: "We teamed up with local bakers to fold massive chunks of brownies, cakes, and cookies directly into our churning ice cream vats.",
    image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=800&auto=format&fit=crop",
    list: ["Cookies & Cream", "Red Velvet Cake", "Cheesecake Swirl", "Gooey Brownie Batter"]
  },
  {
    id: 8,
    title: "Gelato Authentico",
    description: "Churned slower for a denser, silkier texture. Our gelato features less air and more flavor, crafted using traditional Italian techniques.",
    image: "https://partenopedallas.com/wp-content/uploads/2024/11/Gelato-vs-Ice-Cream.jpg",
    list: ["Stracciatella", "Tiramisu", "Bacio (Hazelnut Chocolate)", "Amarena Cherry"]
  },
  {
    id: 9,
    title: "The Berry Patch",
    description: "Sweet, tart, and bursting with antioxidants. We crush whole, ripe berries into our cream for a naturally vibrant, colorful scoop.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop",
    list: ["Wild Blueberry", "Black Currant", "Raspberry Ripple", "Strawberries & Cream"]
  },
  {
    id: 10,
    title: "Tropical Escapes",
    description: "Close your eyes and take a trip to the beach. These exotic flavors are bright, sunny, and incredibly refreshing on a hot summer day.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&auto=format&fit=crop",
    list: ["Pineapple Coconut", "Passionfruit Guava", "Lychee Sweet Cream", "Dragonfruit Delight"]
  },
  {
    id: 11,
    title: "Carnival Classics",
    description: "Nostalgia in a cone. These bright, fun, and ultra-sweet flavors are guaranteed to make you feel like a kid at the state fair again.",
    image: "https://b.zmtcdn.com/data/dish_photos/b61/cb229088b6b118766ff38893564d6b61.jpeg",
    list: ["Cotton Candy", "Bubblegum Pop", "Tutti Frutti", "Cake Batter Confetti"]
  },
  {
    id: 12,
    title: "Guilt-Free Delights",
    description: "All the joy, none of the sugar. Sweetened with natural stevia and monk fruit, these keto-friendly options let you indulge without compromise.",
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=800&auto=format&fit=crop",
    list: ["Keto Vanilla Bean", "Sugar-Free Chocolate", "Skinny Mint Chip", "Low-Carb Peanut Butter"]
  }
];

const Flavors = () => {
  return (
    <div className="flavors-container">
      <div className="flavors-header">
        <h2>Explore Our <span>Categories</span></h2>
        <p>Discover the craft and passion behind every scoop we make.</p>
      </div>

      <div className="categories-wrapper">
        {flavorCategories.map((category) => (
          <div className="category-row" key={category.id}>
            <div className="category-image-wrapper">
              <img src={category.image} alt={category.title} className="category-image" />
            </div>
            <div className="category-text">
              <h3>{category.title}</h3>
              <p className="category-desc">{category.description}</p>
              <ul className="flavor-list">
                {category.list.map((flavor, index) => (
                  <li key={index}>✨ {flavor}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavors;