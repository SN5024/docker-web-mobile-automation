# Dockerfile for running Playwright tests

FROM node:20-bullseye

WORKDIR /app

# Install deps first (better cache)
COPY package*.json ./
RUN npm ci

# OS deps for Playwright
RUN apt-get update && \
    apt-get install -y \
        libnss3 \
        libatk1.0-0 \
        libatk-bridge2.0-0 \
        libcups2 \
        libx11-xcb1 \
        libxcomposite1 \
        libxdamage1 \
        libxrandr2 \
        libgbm1 \
        libpango-1.0-0 \
        libxss1 \
        libasound2 \
        libgtk-3-0 \
        libgdk-pixbuf2.0-0 \
        libffi-dev \
        libpulse0 \
        libdbus-1-3 \
        libxtst6 \
        libxkbcommon0 \
        libdrm2 \
    && rm -rf /var/lib/apt/lists/*

# Install browsers
RUN npx playwright install --with-deps

# Copy project
COPY . .

CMD ["npx", "playwright", "test"]