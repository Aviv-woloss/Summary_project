import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getImageUrl } from "../../api/tmdb";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("watchlist");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [navigate]);

  // פונקציית יציאה מהחשבון (שהועברה מה-Navbar)
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  // נתוני דמה (Mock Data) לפרונטאנד כרגע
  const user = {
    fullName: "Aviv",
    email: "aviv@example.com",
    joinDate: "July 2026",
    avatar: "https://ui-avatars.com/api/?name=Aviv&background=14b8a6&color=fff&size=128"
  };

  const favoriteMovies = [
    { id: 157336, title: "Interstellar", release_date: "2014-11-05", vote_average: 8.6, poster_path: "/gEU2QlsUUHXjNPEtsgh20ZP5wUj.jpg" },
    { id: 155, title: "The Dark Knight", release_date: "2008-07-16", vote_average: 8.5, poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg" }
  ];

  const watchlistMovies = [
    { id: 693134, title: "Dune: Part Two", release_date: "2024-02-27", vote_average: 8.3, poster_path: "/1pdfLvkbY9ohJlCjQH2JGjjcNsV.jpg" },
    { id: 539972, title: "Kraven the Hunter", release_date: "2024-12-11", vote_average: 6.5, poster_path: "/i47IUSsN126K11JUzqQIOi1Mg1M.jpg" },
    { id: 359410, title: "Road House", release_date: "2024-03-08", vote_average: 7.1, poster_path: "/bXi6IQiQDHDNdNw73NPZXl5g1P0.jpg" }
  ];

  const currentList = activeTab === "watchlist" ? watchlistMovies : favoriteMovies;

  return (
    <div className="profile-container">
      <div className="profile-content-wrapper">
        
        {/* אזור פרטי המשתמש */}
        <div className="profile-header">
          <img src={user.avatar} alt={user.fullName} className="profile-avatar" />
          <div className="profile-info">
            <h2>{user.fullName}</h2>
            <p className="profile-email">{user.email}</p>
            <p className="profile-date">Member since {user.joinDate}</p>
          </div>
          
          <div className="profile-actions-wrapper">
            <button className="profile-logout-btn" onClick={handleLogout}>
              Logout
            </button>
            <div className="profile-stats">
              <div className="stat-box">
                <h3>{watchlistMovies.length}</h3>
                <span>Watchlist</span>
              </div>
              <div className="stat-box">
                <h3>{favoriteMovies.length}</h3>
                <span>Favorites</span>
              </div>
            </div>
          </div>
        </div>

        {/* טאבים לניווט בין הטבלאות */}
        <div className="profile-tabs">
          <button 
            className={`tab-btn ${activeTab === "watchlist" ? "active" : ""}`}
            onClick={() => setActiveTab("watchlist")}
          >
            My Watchlist
          </button>
          <button 
            className={`tab-btn ${activeTab === "favorites" ? "active" : ""}`}
            onClick={() => setActiveTab("favorites")}
          >
            Favorite Movies
          </button>
        </div>

        {/* טבלת הסרטים */}
        <div className="table-container">
          {currentList.length > 0 ? (
            <table className="movies-table">
              <thead>
                <tr>
                  <th>Movie</th>
                  <th>Title</th>
                  <th>Release Year</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentList.map((movie) => (
                  <tr key={movie.id}>
                    <td className="td-poster">
                      <Link to={`/movie/${movie.id}`}>
                        <img src={getImageUrl(movie.poster_path, "w92")} alt={movie.title} />
                      </Link>
                    </td>
                    <td className="td-title">
                      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </td>
                    <td className="td-year">{movie.release_date?.substring(0, 4)}</td>
                    <td className="td-rating"> {movie.vote_average?.toFixed(1)}</td>
                    <td className="td-action">
                      <button className="remove-btn">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="empty-state">
              <p>Your {activeTab} is empty.</p>
              <Link to="/" className="explore-btn">Explore Movies</Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}