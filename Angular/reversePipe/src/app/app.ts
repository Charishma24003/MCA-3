import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ReverseNumberPipe } from './reverse-number-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReverseNumberPipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  number: string = '';
}
