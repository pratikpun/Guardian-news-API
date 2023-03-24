import { render, screen } from "@testing-library/react";
import Headlines from "./Headlines";
import testData from "../../../mockNewsData.json";
import { MemoryRouter as Router } from "react-router-dom";

describe("Headlines test", () => {
  describe("Headlines conditional render test", () => {
    test('should display "Loading headlines ..." when data length is 0', () => {
      // Arrange
      // Act
      render(<Headlines data={[]}></Headlines>);
      // Assert
      expect(screen.getByText(/Loading headlines .../i)).toBeInTheDocument();
    });

    test("should display the data from the API", () => {
      // Arrange
      render(
        <Router>
          <Headlines data={testData.response.results} />
        </Router>
      );
      const headlines = screen.getAllByRole(`article`);

      // Act
      // Assert
      expect(headlines.length).toBe(testData.response.results.length);
    });
  });
});
