import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Rockets from '../__Mocks__/react-components/Rockets';

describe('Should Rockets component render', () => {
  test('renders the Rockets', () => {
    render(<Rockets />);
    const titleElement1 = screen.getByRole('heading', { name: 'rocket1' });
    const titleElement2 = screen.getByRole('heading', { name: 'rocket2' });
    expect(titleElement1).toBeInTheDocument();
    expect(titleElement2).toBeInTheDocument();
  });
});
