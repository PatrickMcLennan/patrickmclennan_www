import {
  Button,
  Flex,
  FormControl,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/core";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "urql";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";
import { PROJECTS_QUERY } from "../queries/ProjectsQuery";

const PAGINATION_COUNT = 10;

function Projects() {
  const [filters, setFilters] = useState([]);
  const { register, handleSubmit } = useForm();
  const currentlyDisplayed = useRef(PAGINATION_COUNT);
  const [{ fetching, error, data }, executeQuery] = useQuery({
    query: PROJECTS_QUERY,
    variables: { from: currentlyDisplayed.current - PAGINATION_COUNT, to: currentlyDisplayed.current },
  });

  const onSubmit = (values?) => {
    console.log(values);
  };

  return (
    <>
      <Nav />
      <Hero h1="What I'm working on" />
      <FormControl mt="50px" onSubmit={handleSubmit(onSubmit)}>
        <Flex justifyContent="center">
          <Input maxW="400px" mr="50px" name="text" placeholder="repo name. . ." ref={register} />
          <Menu closeOnSelect={false}>
            {({ isOpen }) => (
              <>
                <MenuButton as={Button}>
                  {filters.length ? filters.toString().replace(/\,/g, ", ") : `Select a Language`}
                  <Icon ml="25px" name={isOpen ? "chevron-up" : "chevron-down"} />
                </MenuButton>
                <MenuList>
                  <MenuList aria-label="Select a language to filter by">
                    {[`HTML`, `CSS`, `JavaScript`, `TypeScript`, `Rust`, `Python`, `Bash`].map((language) => (
                      <MenuItem
                        key={language}
                        onClick={() => {
                          setFilters((prevFilters) =>
                            prevFilters.includes(language)
                              ? prevFilters.filter((filter) => filter !== language)
                              : [...prevFilters, language]
                          );
                          return onSubmit();
                        }}
                      >
                        {language}
                        {filters.includes(language) && <Icon ml="auto" name="check" />}
                      </MenuItem>
                    ))}
                    <MenuDivider />
                    <MenuButton textAlign="center" w="100%" onClick={() => setFilters([])}>
                      Clear All
                    </MenuButton>
                  </MenuList>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </FormControl>
    </>
  );
}

export default Projects;
