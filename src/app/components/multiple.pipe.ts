import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple',
})
export class MultiplePipe implements PipeTransform {
  transform(value: number, multiple: number = 1): number {
    return value * multiple;
  }
}
