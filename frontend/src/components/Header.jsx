import React from "react";
import { Image, Container, Heading } from '@chakra-ui/react'
import { useBoolean } from '@chakra-ui/react'

const Header = () => {
  const [flag, setFlag] = useBoolean()

  return (
    <Container centerContent>

      <Image boxSize='150px' objectFit='cover' src="../img/quotebook.png" align='Center' />
      <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
        {flag ? (<Heading as='h1'>Hack @ UCI Quote Book</Heading>) : (<Heading as='h1'>Hack @ UCI Tech Deliverable</Heading>)}
      </div>

    </Container>
  );
};

export default Header;
