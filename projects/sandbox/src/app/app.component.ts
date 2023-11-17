import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <h1> Hello, I'm the sandbox</h1>
  `,
  styles: `
  h1 {
    color: white
  }
  `
})
export class AppComponent {
  title = 'sandbox';
}
