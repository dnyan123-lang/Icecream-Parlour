import { useState } from 'react';
import './Login.css';

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    // The modal-overlay class will make the dark background behind the popup
    <div className="modal-overlay" onClick={onClose}>
      
      {/* e.stopPropagation() prevents clicks inside the white box from closing the popup */}
      <div className="auth-box" onClick={(e) => e.stopPropagation()}>
        
        {/* The Close Button */}
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
        <p>{isLogin ? "Log in to your account" : "Join the NB IceCream family!"}</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
            </div>
          )}
          
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          
          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        
        <div className="auth-switch">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Register here" : "Login here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;