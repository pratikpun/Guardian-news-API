import axios from "axios";

export const getAPIDataAsync = async () => {
  try {
    // const responseData = await axios.get("http://localhost:4000/response");
    // const responseData = await axios.get(
    //   "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=ad4ecd8e-07f8-48d7-8953-62bf88ddf46a"
    // );

    const responseData = await axios.get(
      process.env.REACT_APP_DATA_SERVICE_URL
    );

    // GUARDIAN URL
    return responseData;
    // MOCK DATA
    //return responseData;
  } catch (e) {
    // return an error object - this could change based on the status code...
    return { error: `Error` };
  }
};
