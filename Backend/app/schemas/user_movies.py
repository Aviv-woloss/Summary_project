from pydantic import BaseModel

class UserMovieCreate(BaseModel):
    tmdb_id: int
    title: str
    release_year: int

class UserMovieResponse(BaseModel):
    id: str
    tmdb_id: int
    title: str
    release_year: int