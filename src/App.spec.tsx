import { render, fireEvent  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from './App';

describe('App Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />)

    expect(getByText('leandro')).toBeInTheDocument()
    expect(getByText('sabrina')).toBeInTheDocument()
    expect(getByText('isabella')).toBeInTheDocument()
  })
  
 
})