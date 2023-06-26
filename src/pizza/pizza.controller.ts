import { Controller, Get, Render, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('pizza')
export class PizzaController {
  @Get()
  @Render('pizza')
  getPizza() {
    return { message: 'Hello Pizza!' };
  }
}
