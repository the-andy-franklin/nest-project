import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  createTodo(todo: Todo): Todo {
    todo.id = this.generateUniqueId();
    this.todos.push(todo);
    return todo;
  }

  updateTodoById(id: number, updatedTodo: Todo): Todo {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex] = { ...this.todos[todoIndex], ...updatedTodo };
      return this.todos[todoIndex];
    }
    return null;
  }

  deleteTodoById(id: number): void {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
    }
  }

  private generateUniqueId(): number {
    const ids = this.todos.map((todo) => todo.id);
    const maxId = Math.max(...ids);
    return maxId >= 0 ? maxId + 1 : 0;
  }
}
