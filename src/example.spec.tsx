import { render, screen } from './test/test-utils';
import App from './example';

test('renders example app', () => {
  render(<App />);
  const small = screen.getByText(/small/i);
  const medium = screen.getByText(/medium/i);
  const large = screen.getByText(/large/i);
  expect(small).toBeInTheDocument();
  expect(medium).toBeInTheDocument();
  expect(large).toBeInTheDocument();
});
