from typing import Optional
from fastapi import FastAPI,Path
from pydantic import BaseModel
import ppt_converter as pp

app = FastAPI()

class PPT_Req(BaseModel):
    slide_num:int
    theme:str
    