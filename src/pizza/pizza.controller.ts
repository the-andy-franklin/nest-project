import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('pizza')
export class PizzaController {
  @Get()
  getPizza(@Res() res: Response) {
    return res.json({ message: 'Hello Pizza!' });
  }
}
