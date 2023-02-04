import { IsString, ValidateIf, IsEnum, IsNumber } from 'class-validator';

import { Categories } from '../../../entities/place';

export class CreatePlaceDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @ValidateIf((_, value) => value !== null)
  author: string | null;

  @IsEnum(Categories)
  categories: Categories[];

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
