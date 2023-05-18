import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  todos = [
    {
      id: 1,
      title: 'Todo 1',
      done: false,
      description: 'Todo 1 description',
    },
    {
      id: 2,
      title: 'Todo 2',
      done: true,
      description: 'Todo 2 description 2',
    },
  ];
  findAllTodos(): any[] {
    return this.todos;
  }
}
