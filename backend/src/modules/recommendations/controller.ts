import { Controller, Get, Post, Query, Body, Delete } from '@nestjs/common';

import { RecommendationsService } from './service';
import { GetPlacesDTO } from './dto/get.places.dto';
import { CreatePlaceDTO } from './dto/create.place.dto';
import { RemovePlaceDTO } from './dto/remove.place.dto';

@Controller('recommendations')
export class RecommendationsController {
  constructor(
    private readonly recommendationsService: RecommendationsService,
  ) {}

  @Get('places')
  getRecommendedPlaces(@Query() dto: GetPlacesDTO) {
    return this.recommendationsService.getPlaces(dto);
  }

  @Post('places')
  createRecommendedPlace(@Body() dto: CreatePlaceDTO) {
    return this.recommendationsService.createPlace(dto);
  }

  @Delete('place')
  removePlace(@Query() dto: RemovePlaceDTO) {
    return this.removePlace(dto);
  }
}
