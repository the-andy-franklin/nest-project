import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { PizzaModule } from './pizza/pizza.module';

@Module({
  imports: [HomeModule, PizzaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
