import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Todo } from './todo.model';

@Injectable()
export class PrismaService {
  public readonly prisma: PrismaClient = new PrismaClient();

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
