import { getAPIDataAsync } from "./getAPIData";
import axiosMock from "axios";
import axios from "axios";

jest.mock(`axios`);

describe("getAPIDataAsync tests", () => {
  test("1 - should call the external API", () => {
    // Arrange
    const testData = { response: [{ results: [{ id: `test` }] }] };
    axiosMock.get.mockResolvedValueOnce(testData);
    // Act
    getAPIDataAsync();
    // Assert
    expect(axiosMock.get).toHaveBeenCalledWith(
      process.env.REACT_APP_DATA_SERVICE_URL
    );
  });
  test("2 - should have successful request returning the right data", async () => {
    // Arrange
    const testData = { testObject: [{ id: `testID`, type: `article` }] };
    axiosMock.get.mockResolvedValueOnce(testData);
    // Act
    const result = await getAPIDataAsync();
    // Assert
    expect(result).toBe(testData);
  });

  test("3 - should return error object on unsuccessful data request", async () => {
    // Arrange
    const error = { error: `Error` };
    axiosMock.get.mockRejectedValueOnce(error);
    // Act
    const result = await getAPIDataAsync();
    // Assert
    expect(result).toEqual(error);
  });
});
