import Select from "react-select";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import Quote from "./Quote";

const DisplayQuote = ({ quotes, getNewAge }) => {
  const options = [
    { value: 0, label: "All Time" },
    { value: 1, label: "Last Year" },
    { value: 2, label: "Last Month" },
    { value: 3, label: "Last Week" },
  ];

  return (
    <Box>
      <SimpleGrid columns={2} marginLeft="2%" spacing={10} marginBottom="3%">
        <Box marginTop="4%">
          <Select
            defaultValue={{ value: 0, label: "All Time" }}
            onChange={getNewAge}
            options={options}
          />
        </Box>
        <Text fontSize="6xl">VIEW QUOTE FROM...</Text>
      </SimpleGrid>

      {quotes.map((Squote, index) => (
        <Quote key={index} quote={Squote} />
      ))}
    </Box>
  );
};

export default DisplayQuote;
