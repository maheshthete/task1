import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure'
})
export class PurePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    return value.slice().sort((a,b) => a-b);
  }

}
