import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecommendationsController } from './controller';
import { RecommendationsService } from './service';

import { Place } from '../../entities/place';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [RecommendationsService],
  controllers: [RecommendationsController],
  exports: [RecommendationsService],
})
export class RecommendationsModule {}
