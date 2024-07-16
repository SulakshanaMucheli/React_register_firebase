import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import './App.css'
import { Outlet, Link } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyC3Melul8aw8ZlxQEZ4L5WsRkhaUj_4taA",
  authDomain: "react-auth-d3ab8.firebaseapp.com",
  projectId: "react-auth-d3ab8",
  storageBucket: "react-auth-d3ab8.appspot.com",
  messagingSenderId: "499623742560",
  appId: "1:499623742560:web:c58f6866f166ac90a50705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);



function Register() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleToggleLogin = () => {
    setIsLogin(!isLogin);};

  const signup = (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUser(user);

        const databaseRef = ref(database, 'users/' + user.uid);
        const userData = {
          email: email,
          last_login: Date.now()
        };

        set(databaseRef, userData)
          .then(() => {
            console.log('User data stored successfully');
          })
          .catch((error) => {
            console.log('Error storing user data:', error);
          });

        console.log(userCredentials);
      })
      .catch((error) => {
        console.log('Error signing up:', error);
      });
  };

  useEffect(() => {
    if (user) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${user.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserData(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  return (
    <div >
      <div className="card">
        <form onSubmit={signup}>
          <label>First Name:</label>
          <input type="text" /><br />
          <label>Last Name:</label>
          <input type="text" /><br />
          <label>Email:</label>
          <input type="email" id="login-email" /><br />
          <label>Password:</label>
          <input type="password" id="login-password" /><br /><br />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <button onClick={handleToggleLogin}>Login here</button></p>
      </div>
      {userData && (
        <div>
          <h2>User Data:</h2>
          <p>Email: {userData.email}</p>
          <p>Last Login: {new Date(userData.last_login).toString()}</p>
        </div>
      )}
      
    </div>
  );
}

export default Register;