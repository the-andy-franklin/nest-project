import { Injectable } from '@nestjs/common';

@Injectable()
export class PizzaService {
  getPizza(): string {
    return 'Pizza!';
  }
}
