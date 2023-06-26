import { Controller, Get, Render } from '@nestjs/common';
import { PizzaService } from './pizza.service';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  @Render('pizza')
  getPizza() {
    return { message: this.pizzaService.getPizza() };
  }
}
