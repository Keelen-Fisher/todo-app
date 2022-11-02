import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ToDo from '../Components/ToDo/ToDo';
import App from '../../App';
import Settings from '../../Context/Settings';
import SettingsProvider from '../Context/Settings/Settings';

describe('ToDo Component Tests', () => {
  test('render a header element as expected', () => {
    render(
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>

    );

    let header = screen.getByTestId('todo-header');
    let h1 = screen.getByTestId('todo-h1');

    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();
    expect(h1).toHaveTextContent('To Do List: 0 items pending');
  });

  test('add an item and it renders', async () => {
    render(
      <Settings>
        <App />
      </Settings>
    )

    /* Setting the value of the input field to 'text Check' */
    const textCheck = screen.getByTestId('text-input')
    fireEvent.change(textCheck, { target: { value: 'text Check' } })

    /* Setting the value of the assignee input field to 'assignee Check' */
    const assigneeCheck = screen.getByTestId('assignee-input')
    fireEvent.change(assigneeCheck, { target: { value: 'assignee Check' } })

    /* Setting the value of the difficulty input field to 5. */
    const difficultyCheck = screen.getByTestId('difficulty-input')
    fireEvent.change(difficultyCheck, { target: { value: 5 } })

    /* Clicking the button with the test id of 'add-item' */
    const buttonTest = screen.getByTestId('add-item');
    fireEvent.click(buttonTest);

    /* Checking to see if the text 'text Check' is in the document. */
    const ToDoCheck = screen.getByText('text Check');
    expect(ToDoCheck).toBeInTheDocument();
  });
})
