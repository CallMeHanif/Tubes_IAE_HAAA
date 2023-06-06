from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import statistics
import os

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/stats")
async def get_stats():
    # Fetch JSON data from external API
    product_api_host = os.getenv("PRODUCT_API_HOST")
    product_api_port = os.getenv("PRODUCT_API_PORT")
    response = requests.get("http://"+product_api_host+":"+product_api_port)    
    data = response.json()

    # Extract values from JSON data
    values = [item["price"] for item in data]

    # Calculate statistical values
    try:
        avg = statistics.mean(values)
        std_dev = statistics.stdev(values)
        min_val = min(values)
        max_val = max(values)

        # Return statistics as JSON response
        return {
            "average": avg,
            "standard_deviation": std_dev,
            "minimum": min_val,
            "maximum": max_val
        }
    except:
        return {
            "error": "Requeire at least two data point"
        }