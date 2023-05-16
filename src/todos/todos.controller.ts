import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interface/todo.interface';

// il Ecoute localhost:3000/todos
@Controller('todos')
export class TodosController {
  constructor(private readonly TodosService: TodosService) {}
  @Get()
  findAllTodos(): Todo[] {
    return this.TodosService.findAllTodos();
  }
}
