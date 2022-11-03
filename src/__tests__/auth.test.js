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
          {
          ({isLoggedIn, user}) => (
            <>
            <Login/>
            <Auth capability="read">
              <p data-testid="isLoggedIn">{isLoggedIn.toString()}</p>
            </Auth>
            <Auth>
              <p data-testid="user"> {`${user.capabilities}`}</p>
            </Auth>
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );

   const usernameInput = screen.getByPlaceholderText('Username');
   const passwordInput = screen.getByPlaceholderText('Password');
   const button = screen.getByText('Login');

   fireEvent.change(usernameInput, {target: {value: 'admin'}});
   fireEvent.change(passwordInput, {target: {value: 'ADMIN'}});
   fireEvent.click(button);

   let authorized = screen.getByTestId('test-read');
   let notAuthorized = screen.getByTestId('test-delete');

   expect(authorized).toHaveTextContext()
   expect(notAuthorized).toHaveTextContent()
   
  })
});
