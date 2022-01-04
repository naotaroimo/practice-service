import { Controller, Get, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:value')
  getHello(@Param('value') value: string, @Query('user') user: string): string {
    console.log(value);
    console.log(user);
    return this.appService.getHello();
  }
}
