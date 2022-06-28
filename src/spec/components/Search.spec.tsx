import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../../components/search/Search';

describe('Search', () => {
  beforeEach(() => {});
  it('should display input & submit button', () => {
    render(<Search />);
    screen.getByLabelText(/Search/);
    screen.getByRole('button', { name: 'Submit' });
  });

  it('should call "getHeroDetil" with name when submitted', () => {
    render(<Search />);
    userEvent.type(screen.getByLabelText(/Search/), 'superman');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
});
