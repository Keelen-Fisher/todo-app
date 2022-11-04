import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext();


const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  const login = (username, password) => {
    // hard coded data implemented -> 
    let authCredentials = testUsers[username];

    if (authCredentials && authCredentials.password === password) {
      try {
        // validateToken(auth.token);
        console.log('Validated...');
      }
      catch (error) {
        console.error(error);
      }
    }
  };

  function validateToken(token) {
    try {
      let validUser = jwt_decode(token);
      if (validUser) {
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('I am Logged in');
        cookie.save('auth', token);

      }
    }
    catch (error) {
      setIsLoggedIn(false);
      setError(error);
      console.error(error);
    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    setError(null);
    cookie.remove('auth');
  }

  useEffect(() => {
    let cookieToken = cookie.load('auth');
    if (cookieToken) {
      validateToken(cookieToken)
    }
  }, []);

  let values = {
    isLoggedIn,
    user,
    error,
    can,
    login,
    logout,
  }

  return (

    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>

  )
}

export default AuthProvider;
