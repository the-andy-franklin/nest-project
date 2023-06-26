import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Todo } from './todo.model';
import { PrismaService } from './prisma.service';
import { z } from 'zod';

@Controller('todos')
export class TodoController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return await this.prismaService.getAllTodos();
  }

  @Get(':id')
  async getTodoById(@Param('id') id: number): Promise<Todo> {
    return await this.prismaService.getTodoById(id);
  }

  @Post()
  async createTodo(@Body() todo: Todo): Promise<Todo> {
    return await this.prismaService.createTodo(todo);
  }

  @Put(':id')
  async updateTodoById(
    @Param('id') id: number,
    @Body() updatedTodo: Todo,
  ): Promise<Todo> {
    return await this.prismaService.updateTodoById(id, updatedTodo);
  }

  @Delete(':id')
  deleteTodoById(@Param('id') id: number): void {
    id = z.coerce.number().nonnegative().parse(id);

    this.prismaService.deleteTodoById(id);
  }
}
