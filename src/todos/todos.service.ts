import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  todos = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Todo 1 description',
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Todo 2 description',
    },
  ];
  findAllTodos(): any[] {
    return this.todos;
  }
}
