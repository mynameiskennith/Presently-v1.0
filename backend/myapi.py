import traceback
from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.responses import JSONResponse, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import ppt_converter as pp


app = FastAPI()

# Configure allowed origins
origins = [
    "http://localhost:3000",  # React development server
    "http://127.0.0.1:3000"  # Alternate localhost
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Origins allowed to access your API
    allow_credentials=True,  # Allow cookies or authentication headers
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.post("/generate-presentation/")
async def generate_presentation(request_data: dict):
    try:
        ppt_stream = pp.create_presentation(request_data)
        headers = {"Content-Disposition": f"attachment; filename={request_data['topic']}_presentation.pptx"}
        return StreamingResponse(ppt_stream, media_type="application/vnd.openxmlformats-officedocument.presentationml.presentation", headers=headers)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))



@app.post("/rate-presentation/")
async def rate_presentation(file: UploadFile):
    # Validating file type
    if not file.filename.lower().endswith('.pptx'):
        raise HTTPException(
            status_code=400, 
            detail="Only .pptx files are supported"
        )
    
    try:
        # Read file contents
        contents = await file.read()
        # print(contents)
        return pp.rate_ppt(contents)
    
    except Exception as e:
        # Detailed error logging
        print(traceback.format_exc())
        return JSONResponse(
            status_code=500, 
            content={
                "error": str(e),
                "details": traceback.format_exc()
            }
        )