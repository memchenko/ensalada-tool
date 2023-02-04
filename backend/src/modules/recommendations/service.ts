import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ArrayContains } from 'typeorm';

import { CreatePlaceDTO } from './dto/create.place.dto';
import { GetPlacesDTO } from './dto/get.places.dto';
import { RemovePlaceDTO } from './dto/remove.place.dto';
import { Place } from '../../entities/place';

@Injectable()
export class RecommendationsService {
  constructor(
    @InjectRepository(Place)
    private readonly places: Repository<Place>,
  ) {}

  async getPlaces(dto: GetPlacesDTO) {
    const places = await this.places.find({
      where: {
        categories: ArrayContains(dto.categories),
      },
    });

    return places;
  }

  createPlace(dto: CreatePlaceDTO) {
    return this.places.save(dto);
  }

  removePlace(dto: RemovePlaceDTO) {
    if (dto.pwd === 1594826) {
      return this.places.delete(dto.id);
    }

    return Promise.reject();
  }
}
