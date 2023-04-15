import React from "react";
import { Box , Avatar, Text, Stack, Flex, VStack} from '@chakra-ui/react'

const Quote = ({ quote }) => {
  return (
    <Box w='90%' marginLeft='5%' border='1px' borderColor='teal' marginBottom='1%' marginTop='1%'>
      
      <Box marginLeft='1%'> 
          <Text as='b'>From: {quote.name}</Text>
          <Text fontSize='xs'>At {quote.time}</Text>
      </Box>

      <Stack direction='row' p={4}>
      <Text as='i'>{quote.message}</Text>
      </Stack>
    </Box>
  );
};

export default Quote;
