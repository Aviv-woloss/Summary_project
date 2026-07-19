from pydantic import BaseModel, Field

class Review(BaseModel):
    user_id: str
    user_name: str
    rating: int = Field(ge=1, le=10)
    comment: str