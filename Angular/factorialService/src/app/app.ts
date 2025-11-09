import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Factorial } from './factorial';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  number = 0;
  result = 0;
  constructor(private factorialService: Factorial) { }
  calculate() {
    this.result = this.factorialService.fact(this.number);
  }

}



