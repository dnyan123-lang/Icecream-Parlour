import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = ({ onOpenLogin }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">NB <span>IceCream</span></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/flavors">Flavors</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-auth">
      
        <button onClick={onOpenLogin} className="login-btn">Login / Register</button>
      </div>
    </nav>
  );
};

export default Navbar;