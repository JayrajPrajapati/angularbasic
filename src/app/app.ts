import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUp } from './componenets/sign-up/sign-up';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SignUp],
  templateUrl: './app.html',
  //template: `<h1>Inline Template with InterPolation {{Tech}}</h1>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular Basic');
  angularVersion ='V21.0.0.0';
  
  Tech = 'Angular';
  Version =21.0;

  getTechWithVersion()
  {
    return "Tech is : <b>" + this.Tech +"</b> & Version is : <b>" + this.Version +"</b>"
  }
  GetTotal(a:number,b:number)
  {
    return a+b;
  }
}
