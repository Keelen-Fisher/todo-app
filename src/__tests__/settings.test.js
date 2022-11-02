import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SettingsProvider, {SettingsContext} from '../Context/Settings/Settings';

describe('Settings Context Unit', () => {
  it('Initializes state for consumption as expected', () => {
    render (<SettingsProvider>
      <SettingsContext>
        {
          ({showCompleted, pageItems, sort}) => {
            <ul>
              <li data-testid="show-completed">{showCompleted.toString()}</li>
              <li data-testid="page-items">{pageItems}</li>
              <li data-testid="sort">{sort}</li>
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
  })
})


