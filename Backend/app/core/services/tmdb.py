import httpx
from app.core.config import settings

class TMDBService:
    def __init__(self):
        self.base_url = settings.TMDB_BASE_URL
        self.api_key = settings.TMDB_API_KEY

    async def get_trending_movies(self, page: int = 1):
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.base_url}/trending/movie/week",
                params={"api_key": self.api_key, "page": page}
            )
            response.raise_for_status()
            return response.json()

tmdb_service = TMDBService()