import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';

// il Ecoute localhost:3000/todos
@Controller('todos')
export class TodosController {
  constructor(private readonly TodosService: TodosService) {}
  @Get()
  findAllTodos(): any[] {
    return this.TodosService.findAllTodos();
  }
}
