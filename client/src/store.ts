import create from "zustand";

export type Project = {
  name: string;
  description: string;
  languagesUsed: string;
  url: string;
};

type State = {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
};

export const useStore = create<State>((set) => ({
  projects: [],
  setProjects: (projects: Project[]) => set({ projects }),
}));
