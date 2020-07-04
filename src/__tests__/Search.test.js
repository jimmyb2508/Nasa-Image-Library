import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../components/Search';

describe('Search', () => {
  it('renders a search bar', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});