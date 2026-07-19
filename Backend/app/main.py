from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os

from app.core.database import connect_db
from app.routers import auth, info

app = FastAPI()

@app.on_event("startup")
async def on_startup():
    await connect_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(info.router)

TMDB_API_KEY ="0356589713b772426c7fd2c10e27f401"
BASE_URL = "https://api.themoviedb.org/3"


@app.get("/api/movies/trending")
def get_trending():
    url = f"{BASE_URL}/trending/movie/week?api_key={TMDB_API_KEY}"
    return requests.get(url).json().get("results", [])

@app.get("/api/movies/popular")
def get_popular():
    url = f"{BASE_URL}/movie/popular?api_key={TMDB_API_KEY}"
    return requests.get(url).json().get("results", [])

@app.get("/api/movies/search")
def search_movies(query: str):
    url = f"{BASE_URL}/search/movie?api_key={TMDB_API_KEY}&query={query}"
    return requests.get(url).json().get("results", [])

@app.get("/api/movies/genre/{genre_id}")
def get_by_genre(genre_id: int):
    url = f"{BASE_URL}/discover/movie?api_key={TMDB_API_KEY}&with_genres={genre_id}"
    return requests.get(url).json().get("results", [])

@app.get("/api/movies/{movie_id}")
def get_movie_details(movie_id: int):
    url = f"{BASE_URL}/movie/{movie_id}?api_key={TMDB_API_KEY}&append_to_response=videos"
    return requests.get(url).json()