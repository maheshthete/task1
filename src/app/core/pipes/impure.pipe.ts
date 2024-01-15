import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false,
})
export class ImpurePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    return value.slice().sort((a,b) => a-b);
  }

}
