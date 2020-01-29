import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { CatsService } from "./cats.service";
import { CatsResolver } from "./cats.resolver";
import { Cat } from "./interfaces/cat";

@Module({
  providers: [CatsService, CatsResolver],
  imports: [TypegooseModule.forFeature([Cat])]
})
export class CatsModule {}
