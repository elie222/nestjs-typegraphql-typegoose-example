import { Resolver, Query } from "@nestjs/graphql";
import { Cat } from "./interfaces/cat";
import { CatsService } from "./cats.service";

@Resolver(of => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => [Cat])
  async cats(): Promise<Cat[]> {
    console.log("gets here");

    const cats = await this.catsService.listCats();
    
    console.log("never gets here", cats);

    return cats;
  }
}
