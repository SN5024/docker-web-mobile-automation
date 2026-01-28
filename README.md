# Dockerized Playwright Test Automation

[![Playwright Tests (Docker)](https://github.com/SN5024/docker-web-mobile-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/SN5024/docker-web-mobile-automation/actions/workflows/playwright.yml)

A scalable and containerized Playwright automation framework for **web and mobile web applications**.  
This framework supports running tests locally in Docker or on CI/CD pipelines like GitHub Actions, with reliable browser support and HTML reporting.

---

## 🚀 Features

- Runs tests on **Chromium, Firefox, and WebKit** (desktop and mobile emulation).  
- Fully Dockerized, ensuring consistent environment across machines and CI.  
- Playwright browsers installed automatically with dependencies.  
- Supports environment-specific test runs using `ENV` variable (dev, staging, prod).  
- Generates **HTML reports** for easy test result review.  
- Easily extendable with page objects and additional tests.

---

## 🎯 Learning Outcomes

By using this framework, you will learn how to:

- Build a production-style Playwright automation framework for web and mobile browsers  
- Run end-to-end tests consistently using Docker containers  
- Integrate automated test execution into GitHub Actions CI pipelines  
- Manage environment-based test execution (dev, staging, prod)  
- Generate and publish HTML test reports from CI runs  
- Troubleshoot browser dependencies and containerized test failures  
- Apply clean framework structure for scalable test automation  

---

## 🐳 Docker Setup

Build Docker Image

```bash

docker build -t playwright-tests .

```
#### Run Tests in Docker Locally

```bash

docker run --rm \
  -e ENV=dev \
  -e CI=true \
  playwright-tests

```
#### Run Tests with Volume Mount (for quick local changes without rebuilding)

```bash
docker run --rm \
  -e ENV=dev \
  -e CI=true \
  -v $(pwd):/app \
  node:20-bullseye bash -c "npm ci && npx playwright test"
```

---

## 🧪 GitHub Actions CI

#### GitHub Actions workflow automatically:

- Checks out the code
- Builds the Docker image
- Runs Playwright tests inside Docker
- Uploads HTML reports as artifacts

#### Workflow can be triggered on:
- push to main branch
- pull_request to main
- Manual workflow_dispatch with environment input (dev, staging, prod)

Locally:

```bash

ENV=staging npx playwright test

```

Docker:

```bash
docker run --rm -e ENV=staging playwright-tests

```

---

## 🗂️ Project Structure

```
├── tests/                 # Playwright test files
│   ├── web/               # Desktop web tests
│   └── mobile-web/        # Mobile web tests
├── pageobjects/           # Page object files
├── package.json           # Node dependencies
├── package-lock.json      # Lockfile
├── playwright.config.js   # Playwright configuration
└── Dockerfile             # Docker container setup

```
---

## 📄 HTML Reports
By default, Playwright generates reports in the playwright-report folder after each run.
- Locally: open playwright-report/index.html in a browser
- CI: uploaded as an artifact in GitHub Actions

---

## ⚙️ Tech Stack
- **Playwright** – End-to-end test automation for modern web & mobile browsers  
- **Node.js (v20)** – JavaScript runtime for test execution  
- **Docker** – Containerized test environment for consistent local & CI runs  
- **GitHub Actions** – Continuous Integration for automated test execution  
- **JavaScript** – Test language and framework logic  
- **HTML Reporter** – Visual Playwright test reports

---

## 📝 Notes
- Make sure Docker Desktop is running before executing any Docker commands.
- Playwright browsers and dependencies are pre-installed inside the container, so tests run consistently across machines and CI.
- Always use CI=true in CI pipelines to avoid GUI prompts and ensure headless mode.