import { Todo } from './todo';

export const TODOS: Todo[] = [
  {
    id: 1,
    title: 'Todo 1',
    content: 'TAKE A SHOWER',
    author: 'Me',
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 2,
    title: 'Todo 2',
    content: 'TAKE A SHOWER',
    author: 'Me',
    isCompleted: true,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 3,
    title: 'Todo 3',
    content: 'TAKE A SHOWER',
    author: 'Me',
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
];
