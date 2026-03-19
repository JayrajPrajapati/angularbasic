import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrim',
})
export class TextTrimPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    if (args.length) {
    return value.substring(0,args[0]);  
    }
    return value.substring(0,10); //Default 10 Character showing remaining else will ellapsed
  }
}
