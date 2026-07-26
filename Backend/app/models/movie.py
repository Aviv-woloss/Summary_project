from datetime import datetime, timezone
from pydantic import BaseModel, Field
from beanie import Document, Indexed
from app.schemas.movie import Review



class Movie(Document):
    tmdb_id: Indexed(int, unique=True)
    title: str
    release_year: int
    reviews: list[Review] = Field(default_factory=list)
    added_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Settings:
        name = "movies"