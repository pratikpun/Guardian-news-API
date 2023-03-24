import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./Components/ArticlePage/Article";
import Headlines from "./Components/HeadlinesPage/Headlines";
import { getAPIDataAsync } from "./utils/getAPIData";
import Header from "./Components/Header/Header";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const getAPIData = async () => {
    const allData = await getAPIDataAsync();
    // GUARDIAN URL
    const data = allData.data.response.results.map((index) => ({
      //MOCK DATA
      //const data = allData.data.results.map((index) => ({
      ...index,
      id: encodeURIComponent(index.id),
    }));

    if (data?.error) {
      setError(data);
      setData([]);
    }
    // If there is no error property in the return, set the error state to empty object and data state to the data returned
    if (!data?.error) {
      setData(data);
      setError({});
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <Router>
      <Header />
      {error && Object.keys(error).length > 0 && <h2>No data to display</h2>}
      <Routes>
        <Route path="/" element={<Headlines data={data} />} />
        <Route path="/article/:id" element={<Article data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
