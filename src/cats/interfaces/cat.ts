import { Field, ID, ObjectType, Int } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Cat {
  // @Property()
  @Field(type => ID)
  id: ObjectId;

  // @Field()
  // readonly _id: ObjectId;

  @Property({ required: true })
  @Field()
  name: string;

  @Property()
  @Field(type => Int, { nullable: true })
  age?: number;
}

export const CatModel = getModelForClass(Cat);
