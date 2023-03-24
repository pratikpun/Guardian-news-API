import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Header from "./Header";

test("1 - should render the same snapshot", () => {
  // Arrange
  const view = render(
    <Router>
      <Header />
    </Router>
  );

  expect(view).toMatchSnapshot();
});
