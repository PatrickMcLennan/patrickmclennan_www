import { Heading } from "@chakra-ui/core";
import { Nav } from "../components/Nav";

const Index = () => (
  <>
    <Nav />
    <Heading as="h1" fontSize="5vw" lineHeight="7vw" ml="10vw" mt="25vh" maxW="50%" fontWeight="hairline">
      I make cool things with TypeScript and other stuff
    </Heading>
  </>
);

export default Index;
