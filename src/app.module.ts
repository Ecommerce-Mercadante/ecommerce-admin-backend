import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { RatingModule } from './rating/rating.module';
import { VariationModule } from './variation/variation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join('schema.gql'),
      // autoSchemaFile: true,
      playground: true,
      introspection: true
    }),
    CategoryModule,
    ProductModule,
    RatingModule,
    VariationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
