import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  getAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  getTodoById(id: number): Promise<Todo | null> {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  createTodo(todo: Todo): Promise<Todo> {
    return this.prisma.todo.create({
      data: todo,
    });
  }

  updateTodoById(id: number, updatedTodo: Todo): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id },
      data: updatedTodo,
    });
  }

  deleteTodoById(id: number): Promise<Todo> {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
