import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Project {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: `date` })
  updatedAt: Date;

  @Field(() => String)
  @Property({ type: `date` })
  createdAt: Date;

  @Field(() => String)
  @Property({ type: `text` })
  title: String;

  @Field(() => String)
  @Property({ type: `text` })
  description: String;

  @Field(() => String)
  @Property({ type: `text` })
  languagesUsed: String[];

  @Field(() => String)
  @Property({ type: `text` })
  url: String[];
}
