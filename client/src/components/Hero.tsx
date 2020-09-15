import { Heading } from "@chakra-ui/core";
import { Container } from "./Container";

export function Hero({ h1 }) {
  return (
    <Container p="2.5vw" pt="10vw" pl="5vw">
      <Heading as="h1">{h1}</Heading>
    </Container>
  );
}
