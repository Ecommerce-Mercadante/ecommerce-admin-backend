import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Category')
export class CategoryDTO {
  @Field(() => ID)
  id: string;

  @FilterableField()
  title: string;

  @FilterableField()
  code: string;

  @FilterableField()
  is_active: boolean;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => GraphQLISODateTime)
  deletedAt: Date;
}
