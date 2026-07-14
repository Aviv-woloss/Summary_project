const API_KEY ="0356589713b772426c7fd2c10e27f401"; 
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
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

export const getImageUrl = (path, size = "original") => {
    if (!path) return "";
    return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
export const fetchByGenre = async (genreId) => {
    if (genreId === 'all') return await fetchTrending();
    
    // ודא שה-URL הזה מתאים למה שאתה צריך, הוספתי API_KEY כמו בשאר הפונקציות
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await response.json();
    return data.results;
};