from beanie import init_beanie
from pymongo import AsyncMongoClient

from app.core.config import settings
from app.models.info import Info
from app.models.user import User

client: AsyncMongoClient | None = None


async def connect_db() -> None:
    global client
    client = AsyncMongoClient(settings.MONGO_URI)
    await init_beanie(
        database=client[settings.DB_NAME],
        document_models=[User, Info],
    )


async def close_db() -> None:
    global client
    if client is not None:
        await client.close()
        client = None
