import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import SettingsProvider, {SettingsContext} from '../Context/Settings/Settings';

describe('Settings Context Unit', () => {
  it('initial state works as expected', () => {

  });

  it('Initializes state for consumption as expected', () => {
    render (<SettingsProvider>
      <SettingsContext>
        {
          ({showCompleted, pageItems, sort, setShowComplete, setPageItems, setSort }) => {
            <ul>
              <li data-testid="show-completed">{showCompleted.toString()}</li>
              <li data-testid="page-items">{pageItems}</li>
              <li data-testid="sort">{sort}</li>
              <button onClick={() => setShowComplete(true)}>ONE</button>
              <button onClick={() => setPageItems(5)}>TWO</button>
              <button onClick={() => setSort('different')}>ONE</button>
            </ul>
          } 
        }

      </SettingsContext>

    </SettingsProvider>);

    let completedLi = screen.getByTestId('show-completed');
    let pageItemLi = screen.getByTestId('page-items');
    let sortLi = screen.getByTestId('sort');

    expect(completedLi).toHaveTextContent('false');
    expect(pageItemLi).toHaveTextContent('3');
    expect(sortLi).toHaveTextContent('difficulty');

    let buttonOne = screen.getByText('ONE');
    let buttonTwo = screen.getByText('TWO');
    let buttonThree = screen.getByText('THREE');
    fireEvent.click(buttonOne);
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonThree);

    expect(completedLi).toHaveTextContent('true');
    expect(pageItemLi).toHaveTextContent('5');
    expect(sortLi).toHaveTextContent('different');
  });
});


