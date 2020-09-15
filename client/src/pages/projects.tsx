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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";
import { ProjectBadge } from "../components/ProjectBadge";
import { useStore } from "../store";

function Projects() {
  const [filters, setFilters] = useState([]);
  const { register, handleSubmit } = useForm();
  const projects = useStore((state) => state.projects);

  console.log(projects);

  const onSubmit = (values?) => {
    console.log(values);
    // if (values)
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
      {projects.map((project) => (
        <ProjectBadge project={project} />
      ))}
    </>
  );
}

export default Projects;
