import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Missions from '../__Mocks__/react-components/Missions';

describe('Should Missions component render', () => {
  test('renders the Missions', () => {
    render(<Missions />);
    const titleElement = screen.getByRole('heading', { name: 'Mission' });
    const table = screen.getByRole('table', { name: '' });
    expect(titleElement).toBeInTheDocument();
    expect(table).toBeInTheDocument();
  });
});
