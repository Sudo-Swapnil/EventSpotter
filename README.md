# Event Search Web Application

This project is a web application designed to search for events using the Ticketmaster API. Built with Angular for the frontend, Node.js/Express for the backend, and integrated with multiple external APIs, this application allows users to search for events, save their favorites, and share them on social media. The project demonstrates the use of Angular, TypeScript, Bootstrap, and several other web development technologies.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [APIs Utilized](#apis-utilized)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Angular Skills Demonstrated](#angular-skills-demonstrated)

## Features

1. **Event Search**: Users can search for events using the Ticketmaster API, filtering results by keyword, category, distance, and location. 
2. **Autocomplete**: The search keyword input provides suggestions powered by the Ticketmaster Autocomplete API.
3. **Favorite Events**: Users can mark events as favorites and view a list of their favorite events.
4. **Event Details**: Detailed event information is displayed in an interactive card format, with additional details for artists, venues, and ticket information.
5. **Social Media Sharing**: Users can share events on Facebook and Twitter.
6. **Responsive Design**: The application is fully responsive, leveraging Bootstrap for seamless experiences across devices.
7. **Local Storage**: Favorite events are stored locally on the user's device.
8. **Geolocation**: Users can auto-detect their location for event searches using the IPinfo API.
9. **Google Maps Integration**: The venue location is shown using Google Maps.

## Screenshots
### Event Search
- ![Event Search](https://drive.google.com/uc?export=view&id=1yIo5SmI0j5LqGMQhfIsPItAgD-N9pvJY)
### Suggestion API
- ![Suggestion API](https://drive.google.com/uc?export=view&id=1vVLdzhhXSdQAVu_konWK1bVIvL-Dfzfy)
### Search Results 1
- ![Search Results 1](https://drive.google.com/uc?export=view&id=19TnlX_ElY3ZybeuBk0i-FNrDo62IwufK)
### Search Results 2
- ![Search Results 2](https://drive.google.com/uc?export=view&id=1LjcjzRuEYT_EvxeUpHxQNY2Z02BjYKoq)
### Event Details
- ![Event Details](https://drive.google.com/uc?export=view&id=1nu7FzQTAQyT9s2ZEuTSALCWZkJmV_8E0)
### Artist Details
- ![Artist Details](https://drive.google.com/uc?export=view&id=1uNoe7pdO4bBQs3kpxpdQwPsbsNTE3Pwm)
### Venue Details
- ![Venue Details](https://drive.google.com/uc?export=view&id=1wneDO0D3lLbluFM6CWKF4pd_FXhNnM3j)
### Venue Google Maps
- ![Venue Google Maps](https://drive.google.com/uc?export=view&id=1hpJUxrNS-i5AJmj3Bi6mrCz2vM6xAI5_)
### Favourites
- ![Favourites](https://drive.google.com/uc?export=view&id=1XaSt2skbkOrPZ2KbY9Izv9H50Kj3pdn0)
### Mobile View
- ![Mobile View](https://drive.google.com/uc?export=view&id=18OY_N1K2MaKW_dluDvkv5oJUyZlqbsAw)



## Technologies Used

- **Frontend**: 
  - Angular (v8+)
  - TypeScript
  - Angular Material
  - Bootstrap (Responsive Design)
  
- **Backend**:
  - Node.js
  - Express.js

- **APIs**:
  - Ticketmaster API
  - Google Maps Geocoding API
  - IPinfo API
  - Spotify API

## APIs Utilized

1. **Ticketmaster API**: Used for event searches, suggestions, and details.
2. **Google Maps Geocoding API**: Converts user-provided addresses into geographic coordinates for event searches.
3. **IPinfo API**: Auto-detects user location for more personalized searches.
4. **Spotify API**: Displays artist information and top albums for music events.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sudo-Swapnil/event-search-app.git
   ```

2. Install the necessary dependencies for both frontend and backend:
```
cd event-search-app
npm install
cd frontend
npm install
```
3. Set up environment variables for API keys (Ticketmaster, Google Maps, Spotify, etc.).

## Running the Application

1. Start the backend
```
cd backend
node app.js
```
2. Start the Angular frontend:
```
cd frontend
npm start
```
3. Visit http://localhost:4200 to view the application in your browser.

## Project Structure
```
.
├── backend/                # Node.js and Express backend
│   └── app.js              # Main backend logic for API calls
├── frontend/               # Angular frontend application
│   ├── src/                # Source code
│   └── angular.json        # Angular configuration file
├── README.md
└── package.json            # Project dependencies and scripts
```

## Angular Skills Demonstrated
### 1. Component-Based Architecture
- The project follows Angular's component-based architecture. Key components include:
    - navbar: Displays navigation options like "Search" and "Favorites."
    - search-form: Handles the search form, including validation and submission.
    - results-table: Displays search results in a table format.
    - event-details-card: Shows detailed information about selected events.
    - favorites: Displays a list of events marked as favorites.
### 2. HttpClientModule for API Requests
- The application makes extensive use of HttpClientModule to perform AJAX calls. Angular services were utilized to make requests to the backend, which in turn communicates with external APIs (Ticketmaster, Google Maps, etc.).
### 3. Routing and Navigation
- Angular routing was used to handle two main routes:
    - /search: Displays the event search page.
    - /favorites: Displays the user's favorite events.
- The RouterModule and ActivatedRoute were used to manage route transitions and pass data between components.
### 4. Two-Way Data Binding and Form Handling
- The search form uses Angular’s reactive forms to implement form validation and two-way data binding for fields like keyword, distance, and location. Form validation provides user-friendly tooltips for incomplete or incorrect submissions.
### 5. Angular Material
- Angular Material was used for various UI elements, such as:
    - mat-autocomplete: For suggesting search keywords.
    - mat-tabs: For organizing event details into tabs like "Event," "Artists/Teams," and "Venue."
    - mat-progress-spinner: Displays popularity in the artists tab using a progress circle.
### 6. Inter-Component Communication
- Components communicate using services and @Input() and @Output() decorators, allowing event data to be passed between the search form, results table, and event details components.
### 7. Local Storage Integration
- Angular’s LocalStorageService was used to persist favorite events in the browser, enabling users to save their favorite events and retrieve them upon returning to the application.
