FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

COPY ./service_shipping /app/service_shipping
WORKDIR /app/service_shipping

RUN pip install requests

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]