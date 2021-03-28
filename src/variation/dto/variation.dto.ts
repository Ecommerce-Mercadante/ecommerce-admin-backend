import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Variation')
export class VariationDTO {
  @Field(() => ID)
  id: string;

  @FilterableField()
  title: string;

  @FilterableField()
  price: number;

  @FilterableField()
  discount: number;

  discountInPercent: string;

  @FilterableField()
  qtd: string;

  @FilterableField()
  is_active: boolean;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => GraphQLISODateTime)
  deletedAt: Date;
}
