const API_KEY = "0356589713b772426c7fd2c10e27f401"; 
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = async () => {
    try {
        const response = await fetch('/api/movies/trending');
        if (!response.ok) throw new Error('Failed to fetch trending from backend');
        return await response.json();
    } catch (error) {
        console.error("Error in fetchTrending:", error);
        return [];
    }
};

export const fetchByGenre = async (genreId) => {
    if (genreId === 'all') return await fetchTrending();
    try {
        const response = await fetch(`/api/movies/genre/${genreId}`);
        if (!response.ok) throw new Error('Failed to fetch genre from backend');
        return await response.json();
    } catch (error) {
        console.error(`Error in fetchByGenre for genre ${genreId}:`, error);
        return [];
    }
};

export const fetchPopular = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const fetchMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);
    const data = await response.json();
    return data;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}

export const getImageUrl = (path, size = "original") => {
    if (!path) return "";
    return `https://image.tmdb.org/t/p/${size}${path}`;
};