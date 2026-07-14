from fastapi import APIRouter, Depends, HTTPException, status

from app.dependencies.auth import get_current_user
from app.models.info import Info
from app.models.user import User
from app.schemas.info import InfoResponse

router = APIRouter(prefix="/api/info", tags=["info"])


@router.get("/me", response_model=InfoResponse)
async def get_my_info(current_user: User = Depends(get_current_user)):
    info = await Info.find_one(Info.user.id == current_user.id)
    if info is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Info not found for this user",
        )

    return InfoResponse(
        id=str(info.id),
        title=info.title,
        content=info.content,
        items=info.items,
    )
