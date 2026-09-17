"""Minimal backend for the BrightCasa static site.

The BrightCasa website is a pure static HTML/CSS/JS site (served by the frontend
static server and, in production, by Netlify). No application backend is required.
This tiny FastAPI app exists only to satisfy the Emergent environment's supervisor,
which expects a service on port 8001. It exposes a single health endpoint.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="BrightCasa static-site health")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health():
    return {"status": "ok", "service": "brightcasa-static"}
