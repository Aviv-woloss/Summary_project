import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem("isLoggedIn", "true");
    
    window.location.href = "/";
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <Link to="/" className="auth-logo">
          <span className="logo-accent">Watch</span>Time
        </Link>
      </header>

      <div 
        className="auth-bg" 
        style={{ backgroundImage: "url('https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg')" }}
      ></div>
      
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? "Sign In" : "Sign Up"}</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Full Name" 
              className="auth-input" 
              required 
            />
          )}
          
          <input 
            type="email" 
            placeholder="Email Address" 
            className="auth-input" 
            required 
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="auth-input" 
            required 
          />
          
          <button type="submit" className="auth-button">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? "New to WatchTime? " : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up now" : "Sign in"}
          </span>
        </p>
      </div>
    </div>
  );
}