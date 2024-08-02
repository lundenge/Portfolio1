import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // Adjust the matcher to be more flexible
  const linkElement = screen.getByText((content, element) => {
    // Match if element contains "learn react" text
    return /learn react/i.test(content);
  });
  expect(linkElement).toBeInTheDocument();
});
