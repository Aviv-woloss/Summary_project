from pydantic import BaseModel


class InfoResponse(BaseModel):
    id: str
    title: str
    content: str
    items: list[str]
