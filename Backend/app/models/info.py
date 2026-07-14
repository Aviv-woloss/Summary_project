from datetime import datetime, timezone

from beanie import Document, Link
from pydantic import Field

from app.models.user import User


class Info(Document):
    user: Link[User]
    title: str = "My Dashboard"
    content: str = "Welcome! This is your personal dashboard info."
    items: list[str] = Field(default_factory=lambda: ["Item 1", "Item 2", "Item 3"])
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Settings:
        name = "info"
