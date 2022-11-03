import React, { useState } from React
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

export default AuthContent = React.createContext();

const testUsers = {

}

const AuthProvider = ({ children }) => {

  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) = {

    // return user?.capabilities?.includes(capability);
  }

  const login = (username, password) => {
    // hard coded data implemented
    let authCredentials = testUsers[username];

    if (authCredentials && authCredentials.password === password) {
      try {

      }
      catch (error) {
        console.error(error);
      }
    }
  };

  function _validateToken(token) {
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
      console.error(e);
    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    setError(null);
    cookie.remove('auth');
  }
  
  let values = {
    isloggedIn,
    user,
    error,
    can,
  }

  return (
    <AuthContext.Provider value={values}>
      
    </AuthContext.Provider>
  
  )
} 

export default AuthProvider;
