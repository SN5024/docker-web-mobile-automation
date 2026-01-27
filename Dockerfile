# --------------------------------------------------
# Base Node image
# --------------------------------------------------
FROM node:20-bullseye

# Create app directory inside container
WORKDIR /app

# --------------------------------------------------
# Copy package.json & install app deps
# --------------------------------------------------
COPY package*.json ./

RUN npm install

# --------------------------------------------------
# Install OS deps required for Playwright browsers
# --------------------------------------------------
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

# --------------------------------------------------
# Install Playwright browsers
# --------------------------------------------------
RUN npx playwright install --with-deps

# --------------------------------------------------
# Copy entire app (tests + pageobjects)
# --------------------------------------------------
COPY . .

# --------------------------------------------------
# Default command to run tests  
# --------------------------------------------------
CMD ["npx", "playwright", "test"]