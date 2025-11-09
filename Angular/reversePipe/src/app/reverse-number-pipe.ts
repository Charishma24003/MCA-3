import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseNumber',
  standalone: true
})
export class ReverseNumberPipe implements PipeTransform {

  transform(value: string | number): string {
    return value.toString().split('').reverse().join('');
  }

}
