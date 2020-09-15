import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useStore } from "../store";

import theme from "../theme";

function useProjects() {
  return useQuery("repo-data", () => {
    fetch(`https://api.github.com/users/patrickmclennan/repos?sort=updated`).then(console.log);
    //   .then((res) =>
    //     Promise.all([
    //       res.map((repo) => ({ ...repo, languagesUsed: fetch(repo.languages_url).then((res) => res.json()) })),
    //     ])
    //   );
  });
}

function MyApp({ Component, pageProps }) {
  const setProjects = useStore(({ setProjects }) => setProjects);
  const { isLoading, error, data } = useProjects();

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
