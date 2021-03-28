import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Variation } from './entities/variation.entity';
import { VariationDTO } from './dto/variation.dto';
import { CreateVariationInput } from './dto/create-variation.input';
import { UpdateVariationInput } from './dto/update-variation.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Variation])],
      resolvers: [
        {
          EntityClass: Variation,
          DTOClass: VariationDTO,
          CreateDTOClass: CreateVariationInput,
          UpdateDTOClass: UpdateVariationInput,
        },
      ],
    }),
  ],
  providers: [],
})
export class VariationModule {}
