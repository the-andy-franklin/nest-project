import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { PizzaModule } from './pizza/pizza.module';
import { TodoModule } from './todo/todo.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HomeModule, PizzaModule, TodoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
