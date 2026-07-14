from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

TMDB_API_KEY ="0356589713b772426c7fd2c10e27f401"; 
BASE_URL = "https://api.themoviedb.org/3"

@app.get("/api/movies/trending")
def get_trending():
    url = f"{BASE_URL}/trending/movie/week?api_key={TMDB_API_KEY}"
    return requests.get(url).json().get("results", [])

@app.get("/api/movies/genre/{genre_id}")
def get_by_genre(genre_id: int):
    url = f"{BASE_URL}/discover/movie?api_key={TMDB_API_KEY}&with_genres={genre_id}"
    return requests.get(url).json().get("results", [])