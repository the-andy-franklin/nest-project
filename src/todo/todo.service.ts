import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTodos(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async getTodoById(id: number): Promise<Todo> {
    return await this.prisma.todo.findUnique({
      where: { id },
    });
  }

  async createTodo(todo: Todo): Promise<Todo> {
    return await this.prisma.todo.create({
      data: todo,
    });
  }

  async updateTodoById(id: number, updatedTodo: Todo): Promise<Todo> {
    return await this.prisma.todo.update({
      where: { id },
      data: updatedTodo,
    });
  }

  async deleteTodoById(id: number): Promise<Todo> {
    return await this.prisma.todo.delete({
      where: { id },
    });
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
