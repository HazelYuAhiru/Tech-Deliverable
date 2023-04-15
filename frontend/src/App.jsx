import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { extendTheme , ChakraProvider } from '@chakra-ui/react'
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
  }

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
        {/* TODO: include an icon for the quote book */}
        <Header />

        {/* TODO: implement custom form submission logic to not refresh the page */}
        <AddQuote ageFilter={ageFilter} getQuote={fetchQuote} />

        {/* TODO: Display the actual quotes from the database */}
        <DisplayQuote quotes={quotes} getNewAge={getNewAge} />
      </ChakraProvider>
    </div>
  );
}

export default App;
