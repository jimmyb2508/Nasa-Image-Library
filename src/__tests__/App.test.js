import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../components/App';

describe('renders img', () => {
  it('renders an asset img', () => {
    render(<App />);
    expect(screen.getByAltText('asset')).toBeInTheDocument();
  });
});