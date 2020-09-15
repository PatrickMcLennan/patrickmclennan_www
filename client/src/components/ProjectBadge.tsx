import { Box, Image, Text } from "@chakra-ui/core";
import { useState } from "react";
import { Project } from "../store";

type Props = {
  project: Project;
};

export function ProjectBadge({ project }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article>
      <Text>{project.name}</Text>
      <Text>{project.description}</Text>
    </article>
  );
}
