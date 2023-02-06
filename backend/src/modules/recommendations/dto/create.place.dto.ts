import { IsString, ValidateIf, IsEnum, IsNumber } from 'class-validator';

import { Categories, CafeCategories } from '../../../entities/place';

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

  @IsEnum(CafeCategories)
  @ValidateIf((_, value) => value !== null)
  subCategories: CafeCategories[] | null;

  @IsString({ each: true })
  @ValidateIf((_, value) => value !== null)
  photos: string[] | null;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
