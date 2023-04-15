import React from "react";
import { Image, Text, Flex, Center } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";

const Header = () => {
  const [flag, setFlag] = useBoolean();

  return (
    <Center marginTop="2%">
      <Flex gap="4">
        <Image
          boxSize="150px"
          objectFit="cover"
          src="../img/quotebook.png"
          align="Center"
        />
        <Center onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
          {flag ? (
            <Text fontSize="7xl">Hack @ UCI Quote Book</Text>
          ) : (
            <Text fontSize="7xl">Hack @ UCI Tech Deliverable</Text>
          )}
        </Center>
      </Flex>
    </Center>
  );
};

export default Header;
