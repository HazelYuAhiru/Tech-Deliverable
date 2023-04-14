import Select from "react-select";
import Quote from "./Quote";

const DisplayQuote = ({ quotes, options, getNewAge }) => {
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
