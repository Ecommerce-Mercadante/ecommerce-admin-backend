import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Rating } from './entities/rating.entity';
import { RatingDTO } from './dto/rating.dto';
import { CreateRatingInput } from './dto/create-rating.input';
import { UpdateRatingInput } from './dto/update-rating.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Rating])],
      resolvers: [
        {
          EntityClass: Rating,
          DTOClass: RatingDTO,
          CreateDTOClass: CreateRatingInput,
          UpdateDTOClass: UpdateRatingInput,
        },
      ],
    }),
  ],
  providers: [],
})
export class RatingModule {}
