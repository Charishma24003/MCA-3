import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simpleCalculator');
  n1 = 0;
  n2 = 0;
  res = 0;

  add() {
    this.res = this.n1 + this.n2;
  }

  sub() {
    this.res = this.n1 - this.n2;
  }

  mult() {
    this.res = this.n1 * this.n2;
  }

  div() {
    if (this.n2 != 0) {
      this.res = this.n1 / this.n2;
    } else {
      alert("Division by zero is not allowed!");
    }
  }

  square() {
    this.res = this.n1 * this.n1;
  }

  sqroot() {
    if (this.n1 >= 0)
      this.res = Math.sqrt(this.n1);
    else
      alert("Neagative square root is not allowed!");
  }
}
