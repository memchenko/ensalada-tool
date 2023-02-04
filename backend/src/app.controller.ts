import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('check')
  healthcheck(): string {
    return 'OK';
  }
}
