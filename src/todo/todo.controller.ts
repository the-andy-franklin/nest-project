import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Todo, todoSchema } from './todo.model';
import { z } from 'zod';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string | number): Promise<Todo | null> {
    const numId = z.coerce.number().parse(id);

    return this.todoService.getTodoById(numId);
  }

  @Post()
  createTodo(@Body() todo: Todo): Promise<Todo> {
    todo = todoSchema.parse(todo);

    return this.todoService.createTodo(todo);
  }

  @Put(':id')
  updateTodoById(
    @Param('id') id: string | number,
    @Body() updatedTodo: Todo,
  ): Promise<Todo> {
    id = z.coerce.number().parse(id);
    updatedTodo = todoSchema.parse(updatedTodo);

    return this.todoService.updateTodoById(id, updatedTodo);
  }

  @Delete(':id')
  deleteTodoById(@Param('id') id: string | number): Promise<Todo> {
    id = z.coerce.number().parse(id);

    return this.todoService.deleteTodoById(id);
  }
}
