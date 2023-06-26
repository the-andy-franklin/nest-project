import { Controller, Get, Render } from '@nestjs/common';

@Controller('pizza')
export class PizzaController {
  @Get()
  @Render('pizza')
  getPizza() {
    return { message: 'Hello Pizza!' };
  }
}
