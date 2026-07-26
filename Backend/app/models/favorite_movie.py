from datetime import datetime, timezone
from beanie import Document, Link
from pydantic import Field
from app.models.user import User

class FavoriteMovie(Document):
    user: Link[User]
    tmdb_id: int
    title: str
    release_year: int
    added_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Settings:
        name = "favorite_movies"