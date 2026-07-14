import { useRef } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../../api/tmdb";
import "./MovieRow.css";

function MovieRow({ title, movies }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth + 100 
        : scrollLeft + clientWidth - 100;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="movie-row">
      <h2 className="section-title">{title}</h2>
      <div className="row-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>&#10094;</button>
        <div className="row-posters" ref={rowRef}>
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`} className="poster-link">
              <img src={getImageUrl(movie.poster_path, "w500")} alt={movie.title} className="row-poster" />
            </Link>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>&#10095;</button>
      </div>
    </div>
  );
}

export default MovieRow;