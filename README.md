# React Firebase Authentication

A simple React application for user registration and login using Firebase Authentication and Firebase Realtime Database. The application includes a registration form, login form, and displays user information after successful login.

## Features

- User Registration
- User Login
- Firebase Authentication
- Firebase Realtime Database integration
- Conditional rendering for registration and login forms

## Technologies Used

- React
- Firebase Authentication
- Firebase Realtime Database
- React Router (for navigation)

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/react-firebase-auth.git
   cd react-firebase-auth
2. **Install dependencies:**
   ```bash
   npm install
3. Create a Firebase project at Firebase Console
   Copy your Firebase configuration and replace the placeholders in the firebaseConfig object in Register.jsx.
   ```bash
   const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_AUTH_DOMAIN",
   projectId: "YOUR_PROJECT_ID",
   storageBucket: "YOUR_STORAGE_BUCKET",
   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
   appId: "YOUR_APP_ID"
   };
4.**Run the application:**
  ```bash
  npm start
