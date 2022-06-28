import { render, screen } from '@testing-library/react';
import Home from '../../pages';

it('renders "Welcome to Next.js!"', () => {
  render(<Home />);
  const element = screen.getByText(/Welcome to Next.js!/);
  expect(element).toBeInTheDocument();
});
