import { IsNumber, IsPositive } from 'class-validator';

export class RemovePlaceDTO {
  @IsNumber()
  @IsPositive()
  id: number;

  // временная защита, пока не запилим авторизацию
  @IsNumber()
  pwd: number;
}
