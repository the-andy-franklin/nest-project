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
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: number): Todo {
    return this.todoService.getTodoById(id);
  }

  @Post()
  createTodo(@Body() todo: Todo): Todo {
    return this.todoService.createTodo(todo);
  }

  @Put(':id')
  updateTodoById(@Param('id') id: number, @Body() updatedTodo: Todo): Todo {
    return this.todoService.updateTodoById(id, updatedTodo);
  }

  @Delete(':id')
  deleteTodoById(@Param('id') id: number): void {
    this.todoService.deleteTodoById(id);
  }
}
