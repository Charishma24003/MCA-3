import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Factorial {
  fact(n: number): number {
    if (n <= 1) return 1;
    else return n * this.fact(n - 1);
  }
}
