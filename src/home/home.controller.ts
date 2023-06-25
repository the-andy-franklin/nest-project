import { Controller, Get, Render } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  @Render('home')
  home() {
    return { message: 'This is a message' };
  }
}
