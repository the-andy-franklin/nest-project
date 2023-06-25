import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaController } from './pizza/pizza.controller';
import { HomeController } from './home/home.controller';

@Module({
  imports: [],
  controllers: [AppController, PizzaController, HomeController],
  providers: [AppService],
})
export class AppModule {}
