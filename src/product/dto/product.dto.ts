import { FilterableField, PagingStrategies, QueryOptions } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Product')
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET })
export class ProductDTO {
  @Field(() => ID)
  id: string;

  @FilterableField()
  title: string;

  description: string;

  @FilterableField()
  price: number;

  @FilterableField()
  discount: number;

  @FilterableField()
  discountInPercent: string;

  @FilterableField()
  sku: string;

  @FilterableField()
  is_active: boolean;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => GraphQLISODateTime)
  deletedAt: Date;
}
