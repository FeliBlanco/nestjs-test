import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version('1')
  @Get()
  getHelloV1(): string {
    return this.appService.getHello();
  }

  @Version('2')
  @Get()
  getHelloV2(): string {
    return this.appService.getHelloV2();
  }

}
