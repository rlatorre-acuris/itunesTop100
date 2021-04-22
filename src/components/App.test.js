import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a message", () => {
  render(<App />);
  const header = screen.getByText(/iTunes top 100/i);
  expect(header).toBeInTheDocument();
});
