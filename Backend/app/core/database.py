from pymongo import AsyncMongoClient
from beanie import init_beanie
from app.core.config import settings
from app.models.info import Info
from app.models.user import User
from app.models.movie import Movie

client: AsyncMongoClient | None = None


async def connect_db() -> None:
    global client
    client = AsyncMongoClient(settings.MONGO_URI)
    db = client.get_database(settings.DB_NAME)
    await init_beanie(
        database=db,
        document_models=[User, Info, Movie],
    )


async def close_db() -> None:
    global client
    if client is not None:
        await client.close()
        client = None