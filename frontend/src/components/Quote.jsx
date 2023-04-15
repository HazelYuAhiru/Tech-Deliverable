import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";

const Quote = ({ quote }) => {
  return (
    <Box
      w="90%"
      marginLeft="2%"
      border="2px"
      borderRadius="2xl"
      borderColor="teal"
      marginBottom="1%"
      marginTop="1%"
    >
      <Box marginLeft="1%" marginRight="1%">
        <Text as="b">From: {quote.name}</Text>
        <Text fontSize="xs">At {quote.time}</Text>
      </Box>

      <Stack direction="row" p={4}>
        <Text as="i">"{quote.message}"</Text>
      </Stack>
    </Box>
  );
};

export default Quote;
