from fastapi import APIRouter, Depends, HTTPException, status
from app.core.config import settings
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.movie import Movie
from app.schemas.movie import Review
import httpx

router = APIRouter(prefix="/api/movies", tags=["movies"])

@router.get("/trending")
async def get_trending():
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{settings.TMDB_BASE_URL}/trending/movie/week?api_key={settings.TMDB_API_KEY}")
        return response.json().get("results", [])

@router.post("/review", status_code=status.HTTP_201_CREATED)
async def add_movie_review(
    tmdb_id: int,
    title: str,
    release_year: int,
    rating: int,
    comment: str,
    current_user: User = Depends(get_current_user)
):
    movie = await Movie.find_one(Movie.tmdb_id == tmdb_id)
    
    if not movie:
        movie = Movie(tmdb_id=tmdb_id, title=title, release_year=release_year)
        await movie.insert()

    new_review = Review(
        user_id=str(current_user.id),
        user_name=current_user.full_name or current_user.email,
        rating=rating,
        comment=comment
    )
    
    movie.reviews.append(new_review)
    await movie.save()
    return {"message": "Review added successfully", "movie": movie}