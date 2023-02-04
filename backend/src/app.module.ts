import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import AppConfig from './configs/app';
import { AppController } from './app.controller';
import { DBModule } from './modules/db';
import { RecommendationsModule } from './modules/recommendations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [AppConfig],
    }),
    DBModule,
    RecommendationsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
