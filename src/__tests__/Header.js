import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../modules/Header';

describe('Should render Header', () => {
  test('Renders Header component', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
  });
});
