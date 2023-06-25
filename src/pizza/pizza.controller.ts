import { Controller, Get, Res } from '@nestjs/common';

@Controller('pizza')
export class PizzaController {
  @Get()
  HelloPizza(@Res() res) {
    return res.json({ message: 'Hello Pizza!' });
  }
}
