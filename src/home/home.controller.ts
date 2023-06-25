import { Controller, Get, Render } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  @Render('home')
  get() {
    return { message: 'This is a message' };
  }
}
