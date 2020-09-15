import { Flex, useColorMode } from "@chakra-ui/core";

export const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.300", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return <Flex bg={bgColor[colorMode]} color={color[colorMode]} {...props} />;
};
