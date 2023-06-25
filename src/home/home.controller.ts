import { Controller, Get, Render } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @Render('home')
  getHome() {
    return { message: this.homeService.getHello() };
  }
}
