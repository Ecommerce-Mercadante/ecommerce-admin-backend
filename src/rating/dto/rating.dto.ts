import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Rating')
export class RatingDTO {
  @Field(() => ID)
  id: string;

  @FilterableField()
  name: string;

  description: string;

  @FilterableField()
  pontuation: number;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => GraphQLISODateTime)
  deletedAt: Date;
}
