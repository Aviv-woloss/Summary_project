# WatchTime — Movie Discovery & Watchlist Web Application

**WatchTime** is a modern, full-stack movie discovery web application that allows users to explore trending and popular films, search movies in real-time, manage personal watchlists and favorites, and share custom reviews.

---

##  Key Features

* **Cinematic Hero & Carousels:** Dynamic homepage showcasing trending banners, categories filtering, and smooth horizontal movie rows.
* **Instant Spotlight Search:** Real-time search debouncing with quick-navigation dropdown results.
* **User Authentication:** Complete sign-in and sign-up flows with form validation and persistent session state.
* **Interactive Movie Details:** Deep-dive pages featuring official YouTube trailers, runtime, ratings, and a custom user review system.
* **User Profile Dashboard:** Dedicated space to manage personal stats, view favorited and watchlist movies, and handle account sessions.
* **Responsive UI/UX:** Sleek dark-mode glassmorphism design fully optimized for both desktop and mobile viewports.

---

##  Tech Stack

* **Frontend:** React (v18), React Router (v6), Vite
* **Styling:** Vanilla CSS (Custom Design System with CSS Variables, Flexbox, Grid, and Glassmorphism effects)
* **APIs:** The Movie Database (TMDB) API & Custom Backend Proxy
* **Tooling:** npm, ESLint

---

## 📁 Project Structure

```text
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies and build scripts
├── vite.config.js          # Vite configuration with API proxy setup
└── src/
    ├── App.jsx             # Root component with route definitions
    ├── index.css           # Global variables and base styling
    ├── api/
    │   ├── tmdb.js         # TMDB API integration methods
    │   └── backend.js      # Backend communication layer
    ├── components/
    │   ├── SearchSpotlight/ # Real-time search dropdown component
    │   ├── layout/         # Navbar, Footer, and Layout wrapper
    │   └── movie/          # CategoryFilter, MovieRow, and TrailerModal components
    └── pages/
        ├── Auth/           # Login & Register views
        ├── Home/           # Hero banner and movie category rows
        ├── MovieDetails/   # Movie info, trailers, and review system
        └── Profile/        # User dashboard, watchlist, and favorites tables

```

---

##  Getting Started & Installation

### Prerequisites

* Node.js (v18 or higher recommended)
* npm

### Installation Steps

1. Clone or download the repository into your local workspace.
2. Install the project dependencies:
```bash
npm install

```


3. Run the development server:
```bash
npm run dev

```


4. Open your browser and navigate to `http://localhost:5173`.
