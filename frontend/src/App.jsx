import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import DisplayQuote from "./components/DisplayQuote";
import AddQuote from "./components/AddQuote";
import Header from "./components/Header";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [ageFilter, setFilter] = useState(0);

  // Fetch Quotes
  const fetchQuote = async (newAge) => {
    setFilter(newAge);
    axios
      .get(`http://127.0.0.1:8000/getquote?ageFilter=${newAge}`)
      .then((res) => {
        setQuotes(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getNewAge = (newfilt) => {
    fetchQuote(newfilt.value);
  };

  //for initial setup
  useEffect(() => {
    fetchQuote(ageFilter);
  }, [ageFilter]);

  return (
    <div className="App">
      <ChakraProvider>
        <Header />

        <AddQuote ageFilter={ageFilter} getQuote={fetchQuote} />

        <DisplayQuote quotes={quotes} getNewAge={getNewAge} />
      </ChakraProvider>
    </div>
  );
}

export default App;
