import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signupPipe',
})
export class SignupPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
