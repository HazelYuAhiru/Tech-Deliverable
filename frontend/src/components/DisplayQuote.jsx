import Select from "react-select";
import { Box } from '@chakra-ui/react'
import Quote from "./Quote";

const DisplayQuote = ({ quotes, getNewAge }) => {

  const options = [
    { value: 0, label: "All Time" },
    { value: 1, label: "Last Year" },
    { value: 2, label: "Last Month" },
    { value: 3, label: "Last Week" },
  ];

  return (
    <div>
      <h2>Previous Quotes</h2>
      <div className="selectMenu">
        <p>View Quotes From:</p>
        <Select
          defaultValue={{ value: 0, label: "All Time" }}
          onChange={getNewAge}
          options={options}
        />
      </div>
      <div className="messages">
        {quotes.map((Squote, index) => (
          <Quote key={index} quote={Squote} />
        ))}
      </div>
    </div>
  );
};

export default DisplayQuote;
