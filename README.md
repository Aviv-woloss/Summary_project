# WatchTime — Fullstack Movie Platform

A modern full-stack movie discovery web application that allows users to explore popular and trending films, manage personal watchlists and favorites, write reviews and ratings, and fetch live data directly from the TMDB API.

---

## Video Demo








https://github.com/user-attachments/assets/d9c037f0-8265-4afa-90d0-fa35046c3425






---

## Tech Stack

### **Backend:**

* **FastAPI** — High-performance asynchronous Python web framework
* **MongoDB & Beanie ODM** — NoSQL database with asynchronous Object-Document Mapping
* **Pydantic v2** — Data validation and settings management
* **JWT & Bcrypt** — Secure authentication, password hashing, and HTTP-only cookie session management
* **HTTPX** — Asynchronous HTTP client for external API requests (TMDB)

### **Frontend:**

* **React** — Dynamic client-side component library
* **Vite** — Fast frontend build tool and development server
* **Vanilla CSS** — Custom glassmorphism design system using CSS variables, flexbox, and grid

---

## Project Structure

```text
├── backend/
│   ├── app/
│   │   ├── core/           # Configuration, database connection, security, and third-party services
│   │   ├── dependencies/   # Dependency injection (e.g., current user authentication)
│   │   ├── models/         # Beanie document database models
│   │   ├── routers/        # API route endpoints (Auth, Movies, User-Movies, Info)
│   │   ├── schemas/        # Pydantic request and response validation models
│   │   └── main.py         # FastAPI application entry point
│   └── .env                # Environment variables configuration
└── frontend/               # React client-side application

```

---

## Key Features

* **Secure Authentication:** User registration, login, logout, and profile management utilizing JWT tokens and secure HTTP-only cookies.
* **Trending Content:** Live fetching of popular and weekly trending movies directly from the TMDB database.
* **Watchlist & Favorites:** Personal tracking system allowing users to save and manage favorite films and watch-later lists.
* **Community Reviews:** Interactive rating (1-10) and comment system for movies.

---

## Getting Started & Installation

### Prerequisites:

* Python 3.10+
* Node.js & npm
* MongoDB (running locally or via MongoDB Atlas)

### 1. Running the Backend:

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn beanie motor pydantic-settings python-jose bcrypt httpx

# Create a .env file with the following configuration:
MONGO_URI=mongodb://localhost:27017
DB_NAME=portfolioDB
JWT_SECRET=your-super-secret-key
TMDB_API_KEY=your_tmdb_api_key_here

# Run the development server
uvicorn app.main:app --reload

```

The server will run at `http://localhost:8000` (interactive API documentation available at `/docs`).

### 2. Running the Frontend:

```bash
cd frontend

# Install dependencies and start development server
npm install
npm run dev

```
