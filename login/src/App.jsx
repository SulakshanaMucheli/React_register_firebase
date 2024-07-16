import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleToggleLogin = () => {
    setShowLogin(true);
  };

  const handleToggleRegister = () => {
    setShowLogin(false);
  };

  return (
    <div className="App">
      {showLogin ? (
        <Login handleToggleRegister={handleToggleRegister} />
      ) : (
        <Register handleToggleLogin={handleToggleLogin} />
      )}
    </div>
  );
}


export default App;


