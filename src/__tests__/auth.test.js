import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthProvider, { AuthContext } from '../Context/Auth';
import Login from '../Components/Login';
import Auth from '../Components/Auth';

describe('Testing Auth Functionality', () => {

  test('The containment of initial values for user and logged in', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {auth => (
            <>
              <p data-testid="isLoggedIn">{auth.isLoggedIn.toString()}</p>
              <p data-testid="user">{typeof auth.user}</p>
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    )
  })
});
