import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchSpotlight from "../../SearchSpotlight/SearchSpotlight";
import "./Navbar.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <Link to="/" className="logo">WatchTime</Link>
        <Link to="/" className="nav-link">Home</Link>
      </div>
      
      <div className="nav-center">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <SearchSpotlight query={searchQuery} onClose={() => setSearchQuery("")} />
        </div>
      </div>

      <div className="nav-right">
        <Link to="/auth" className="login-btn">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;