from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Serve static files from the "ui" folder
app.mount("/", StaticFiles(directory="ui"), name="static")

@app.get("/")
async def read_root():
    return {"message": "Hello, this is the shipping service."}

# @app.get("/")
# def read_root():
#     return {"message": "Hello, this is the shipping service."}

@app.get("/shipping/{origin}/{destination}/{weight}/{courier}")
def calculate_shipping(origin: str, destination: str, weight: int, courier: str):
    # Logika perhitungan pengiriman di sini
    shipping_cost = calculate_shipping_cost(origin, destination, weight, courier)
    return {"origin": origin, "destination": destination, "weight": weight, "courier": courier, "shipping_cost": shipping_cost}

def calculate_shipping_cost(origin: str, destination: str, weight: int, courier: str):
    # Logika perhitungan tarif pengiriman di sini
    # Anda dapat menggunakan kode dari contoh sebelumnya untuk mengintegrasikan dengan API RajaOngkir atau logika pengiriman Anda sendiri
    # Misalnya, dapatkan tarif pengiriman dari API RajaOngkir
    shipping_cost = 10000
    return shipping_cost
