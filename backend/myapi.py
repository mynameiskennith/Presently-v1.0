import traceback
from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.responses import JSONResponse, StreamingResponse
import ppt_converter as pp

app = FastAPI()

@app.post("/generate-presentation")
async def generate_presentation(request_data: dict):
    try:
        ppt_stream = pp.create_presentation(request_data)
        headers = {"Content-Disposition": f"attachment; filename={request_data["topic"]}_presentation.pptx"}
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