import { Project } from "../entities/Project";
import { MyContext } from "../types/MyContext";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class ProjectResolver {
  @Query(() => [Project])
  getProjects(@Ctx() { em }: MyContext): Promise<Project[]> {
    return em.find(Project, {});
  }
}
