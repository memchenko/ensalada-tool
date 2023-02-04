import { IsEnum } from 'class-validator';

import { Categories } from '../../../entities/place';

export class GetPlacesDTO {
  @IsEnum(Categories, { each: true })
  categories: Categories[];
}
