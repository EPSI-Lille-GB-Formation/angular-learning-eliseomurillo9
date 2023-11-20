import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>hello World</h1>
    <details *ngFor="let task of todoList; index as i">
        <summary *ngIf="!task.isCompleted" (click)="selectTodo(i)">
          {{ task.title }}
        </summary>
    </details>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  todoList = TODOS;
  ngOnInit() {
    console.table(TODOS);
  }

  selectTodo(i: number) {
    console.log(this.todoList[i]);
  }
}
