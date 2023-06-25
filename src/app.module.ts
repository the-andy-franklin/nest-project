import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaController } from './pizza/pizza.controller';

@Module({
  imports: [],
  controllers: [AppController, PizzaController],
  providers: [AppService],
})
export class AppModule {}
