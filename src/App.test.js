import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text1', () => {
  render(<App />);
  expect(screen.getByText(/github action test/i)).toBeInTheDocument();
});

test('renders text2', () => {
  render(<App />);
  expect(screen.getByText(/row2/i)).toBeInTheDocument();
});
