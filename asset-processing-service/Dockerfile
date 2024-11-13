FROM python:3.9-slim

# TODO: Install Video Editing Tool: Whisper

WORKDIR /app

COPY pyproject.toml poetry.lock* /app/

RUN pip install poetry && poetry install --no-root

COPY . /app

CMD ["poetry","run", "asset_processing_service"]
