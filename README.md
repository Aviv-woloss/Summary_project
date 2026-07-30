# WatchTime Backend — FastAPI Application

WatchTime Backend** is a high-performance, asynchronous REST API built with FastAPI and MongoDB (via Beanie ODM). It powers the WatchTime movie application by handling secure cookie-based authentication, user dashboards, custom reviews, favorites, and watchlist items, alongside integrated fetching from the external TMDB (The Movie Database) API.

---

##  Key Features

Asynchronous Architecture:** Built using FastAPI with lifespan event handlers and asynchronous MongoDB drivers.
* **Secure Authentication & Authorization:** Implements JSON Web Tokens (JWT) stored securely in HTTP-only cookies, combined with Bearer token header support and `bcrypt` password hashing.
* **ODM Database Modeling:** Utilizes **Beanie** ODM over Motor/MongoDB for type-safe document modeling of users, movies, reviews, favorites, and watchlists.
* **TMDB Integration:** Built-in HTTP service (`httpx`) to fetch trending movies and external data seamlessly.
* **CORS & Middleware Configured:** Ready-to-use cross-origin resource sharing configured via Pydantic settings.

---

##  Tech Stack

* **Framework:** FastAPI
* **Database & ODM:** MongoDB, Motor, Beanie ODM
* **Validation & Settings:** Pydantic v2, Pydantic Settings
* **Security & Auth:** Python-Jose (JWT), Passlib/Bcrypt
* **HTTP Client:** Httpx

---

##  Project Structure

```text
├── app/
│   ├── core/
│   │   ├── config.py           # Pydantic settings and environment variables
│   │   ├── database.py         # MongoDB client and Beanie ODM initialization
│   │   ├── security.py         # Password hashing and JWT creation/decryption
│   │   └── services/           # External service clients (TMDB)
│   ├── dependencies/
│   │   └── auth.py             # Dependency injection for current user authentication
│   ├── models/                 # Database documents (Beanie)
│   │   ├── user.py
│   │   ├── info.py
│   │   ├── movie.py
│   │   ├── favorite_movie.py
│   │   └── watchlist_movie.py
│   ├── routers/                # API Route endpoints
│   │   ├── auth.py             # Register, login, logout, /me
│   │   ├── info.py             # User dashboard info
│   │   ├── movies.py           # Trending & movie reviews
│   │   └── user_movies.py      # Favorites & Watchlist management
│   ├── schemas/                # Pydantic request/response validation models
│   │   ├── auth.py
│   │   ├── info.py
│   │   ├── movie.py
│   │   └── user_movies.py
│   └── main.py                 # FastAPI application factory and middleware setup
└── .vscode/                    # IDE settings

```

---

##  API Endpoints Summary

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/auth/register` | `POST` | Register a new user account, initialize profile info, and set auth cookie |
| `/api/auth/login` | `POST` | Authenticate user credentials and return access cookie |
| `/api/auth/logout` | `POST` | Clear authentication cookie |
| `/api/auth/me` | `GET` | Get public profile details of currently logged-in user |
| `/api/info/me` | `GET` | Retrieve personal dashboard info for current user |
| `/api/movies/trending` | `GET` | Fetch trending movies via TMDB proxy |
| `/api/movies/review` | `POST` | Add a review/rating to a movie document |
| `/api/user-movies/favorites` | `GET` / `POST` | Manage user's favorite movies |
| `/api/user-movies/watchlist` | `GET` / `POST` | Manage user's watch later list |

---

##  Getting Started & Installation

### Prerequisites

* Python 3.10+
* MongoDB running locally or via a cloud connection string (e.g., MongoDB Atlas)

### Installation Steps

1. Clone or place the backend directory in your workspace.
2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

```


3. Install the required dependencies:
```bash
pip install fastapi uvicorn beanie motor pydantic-settings python-jose bcrypt httpx

```


4. Create a `.env` file in the root folder with your configuration variables:
```env
MONGO_URI=mongodb://localhost:27017
DB_NAME=portfolioDB
JWT_SECRET=your-super-secret-key
TMDB_API_KEY=your_tmdb_api_key_here

```


5. Run the development server:
```bash
uvicorn app.main:app --reload

```


6. Access the interactive API documentation at `http://localhost:8000/docs`.
