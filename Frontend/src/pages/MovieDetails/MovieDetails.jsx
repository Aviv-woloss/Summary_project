import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, getImageUrl } from "../../api/tmdb";
import TrailerModal from "../../components/movie/TrailerModal";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadDetails();
  }, [id]);

  if (!movie) return <div className="text-white text-center pt-20">Loading...</div>;

  const trailer = movie.videos?.results?.find(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
  );

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url('${getImageUrl(movie.backdrop_path)}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      </div>

      <div className="px-12 relative z-10 -mt-32 pb-12 flex gap-8 flex-col md:flex-row">
        <img
          src={getImageUrl(movie.poster_path, "w500")}
          alt={movie.title}
          className="w-64 rounded-lg shadow-2xl object-cover"
        />
        <div className="flex-1 mt-8 md:mt-32">
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
          <div className="flex gap-4 mb-6 text-gray-400 items-center">
            <span>{movie.release_date?.substring(0, 4)}</span>
            <span>•</span>
            <span>{movie.runtime} min</span>
            <span>•</span>
            <span>⭐ {movie.vote_average?.toFixed(1)}/10</span>
          </div>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl">{movie.overview}</p>
          
          {trailer && (
            <button
              onClick={() => setShowTrailer(true)}
              className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Watch Trailer
            </button>
          )}
        </div>
      </div>

      {showTrailer && (
        <TrailerModal videoKey={trailer.key} onClose={() => setShowTrailer(false)} />
      )}
    </div>
  );
}

export default MovieDetails;