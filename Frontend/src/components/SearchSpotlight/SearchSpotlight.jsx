import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchMovies, getImageUrl } from "../../api/tmdb";
import "./SearchSpotlight.css";

function SearchSpotlight({ query, onClose }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim().length > 0) {
        const data = await searchMovies(query);
        setResults(data);
      } else {
        setResults([]);
      }
    };

    const timer = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  if (!query) return null;

  return (
    <div className="spotlight-container">
      {results.length > 0 ? (
        <div className="spotlight-results">
          {results.slice(0, 6).map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="spotlight-item"
              onClick={onClose}
            >
              <img src={getImageUrl(movie.poster_path, "w92")} alt={movie.title} />
              <div className="spotlight-info">
                <h4>{movie.title}</h4>
                <span>{movie.release_date?.substring(0, 4)}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="spotlight-no-results">No movies found...</div>
      )}
    </div>
  );
}

export default SearchSpotlight;