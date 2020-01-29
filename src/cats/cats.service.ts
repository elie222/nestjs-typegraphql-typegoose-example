import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat) private readonly catModel: ReturnModelType<typeof Cat>
  ) {}

  async createCustomCat(cat: Cat) {
    const createdCat = new this.catModel(cat);
    return await createdCat.save();
  }

  async listCats(): Promise<Cat[] | null> {
    return this.catModel.find().exec();
  }
}
