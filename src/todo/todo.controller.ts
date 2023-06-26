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
import { z } from 'zod';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return await this.todoService.getAllTodos();
  }

  @Get(':id')
  async getTodoById(@Param('id') id: number): Promise<Todo> {
    return await this.todoService.getTodoById(id);
  }

  @Post()
  async createTodo(@Body() todo: Todo): Promise<Todo> {
    return await this.todoService.createTodo(todo);
  }

  @Put(':id')
  async updateTodoById(
    @Param('id') id: number,
    @Body() updatedTodo: Todo,
  ): Promise<Todo> {
    return await this.todoService.updateTodoById(id, updatedTodo);
  }

  @Delete(':id')
  deleteTodoById(@Param('id') id: number): void {
    id = z.coerce.number().nonnegative().parse(id);

    this.todoService.deleteTodoById(id);
  }
}
