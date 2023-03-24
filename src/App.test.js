import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

// import { getAPIDataAsync } from "./utils/getAPIData";
// jest.mock("./utils/getAPIData");

test("renders DFA Github link", () => {
  render(<App />);
  const linkElement = screen.getByText(/GUARDIAN NEWS/i);
  expect(linkElement).toBeInTheDocument();
});
// test("testing useEffect in App.js", async () => {
//   const mockArticle = {
//     data: {
//       response: {
//         results: [{ id: "test" }],
//       },
//     },
//   };
//   getAPIDataAsync.mockResolvedValueOnce(mockArticle);

//   render(<App />);

//   await waitFor(() => expect(getAPIDataAsync).toHaveBeenCalled());
// });
