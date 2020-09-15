import { Box, Flex, Link, Text } from "@chakra-ui/core";
import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

const linkStyles = {
  fontSize: "30px",
  lineHeight: "40px",
};

export function Nav(): JSX.Element {
  return (
    <Flex h="10vh" w="100%" px={5} py={4} justifyContent="space-between" alignItems="center">
      <Text fontSize="35px" fontWeight="hairline" pl={3}>
        PM
      </Text>
      <Box>
        <Link {...linkStyles} href="/">
          Home
        </Link>
        <Link {...linkStyles} href="aboutMe" mx="20px">
          About
        </Link>
        <Link {...linkStyles} href="/projects">
          Projects
        </Link>
      </Box>
      <DarkModeSwitch />
    </Flex>
  );
}
