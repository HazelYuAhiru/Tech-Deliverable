import { useState } from "react";
import { Input , Text , Textarea , Button , Container , Center} from '@chakra-ui/react'
import axios from "axios";

const AddQuote = ({ ageFilter, getQuote }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", name);
    form.append("message", message);

    axios
      .post(`http://127.0.0.1:8000/quote`, form)
      .then((response) => console.log(response))
      .catch((error) => {
        console.log("something went wrong");
      });

    setName("");
    setMessage("");

    getQuote(ageFilter);
  };

  return (
    <Container marginTop='2%'>
      <h2>Submit a quote</h2>
        <Text mb='8px'>Name: </Text>
        <Input placeholder='Let Us Know Your Name!'
          size='sm'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Text mb='8px'>Quote: </Text>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type Quote Here'
          size='sm'
          required
        />
        <Center>
        <Button colorScheme='teal' variant='outline' onClick={onSubmit} >Submit</Button>
        </Center>
    </Container>
  );
};

export default AddQuote;
