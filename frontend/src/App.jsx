import "./App.css";
import { useState, useEffect } from "react";
import DisplayQuote from "./components/DisplayQuote";
import AddQuote from "./components/AddQuote";
import Header from "./components/Header";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [ageFilter, setFilter] = useState(0);

  const options = [
    { value: 0, label: "All Time" },
    { value: 1, label: "Last Year" },
    { value: 2, label: "Last Month" },
    { value: 3, label: "Last Week" },
  ];

  // Fetch Quotes
  const fetchQuote = async (newAge) => {
    const res = await fetch(`../api/quote/?maxAge=${newAge}`);
    const data = await res.json();

    return data;
  };

  const getNewAge = (newfilt) => {
    getQuote(newfilt.value);
  };

  const getQuote = async (newAge) => {
    setFilter(newAge);
    const qServer = await fetchQuote(newAge);
    setQuotes(qServer);
  };

  //for initial setup
  useEffect(() => {
    getQuote(0);
  }, []);

  return (
    <div className="App">
      {/* TODO: include an icon for the quote book */}
      <Header />

      {/* TODO: implement custom form submission logic to not refresh the page */}
      <AddQuote ageFilter={ageFilter} getQuote={getQuote} />

      {/* TODO: Display the actual quotes from the database */}
      <DisplayQuote quotes={quotes} options={options} getNewAge={getNewAge} />
    </div>
  );
}

export default App;
