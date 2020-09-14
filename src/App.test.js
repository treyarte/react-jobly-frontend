import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('the app component', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
