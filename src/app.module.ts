import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypegooseModule } from "nestjs-typegoose";
import { CatsModule } from "./cats/cats.module";

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/nest", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
    CatsModule
  ]
})
export class AppModule {}
