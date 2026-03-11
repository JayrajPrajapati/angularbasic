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

  count = 0;
  getTechWithVersion()
  {
    return "Tech is : <b>" + this.Tech +"</b> & Version is : <b>" + this.Version +"</b>"
  }
  GetTotal(a:number,b:number)
  {
    return a+b;
  }
  callButtonEvent()
  {
    alert('Button Event Bind...');
  }
  counter(action:string)
  {
    if(action === '-' )
      this.count>0  && this.count--
    else
      this.count++
  }
  handleEvnet(eventType:string)
  {
    alert('Event Type is :'+eventType);
  }
  data = 10;
  updateData(val:number,user:string)
  {
this.data = val;
console.log(user);
console.log(this.sum(10,20));
  }
  sum(a:number,b:number):number
  {
    return a+b;
  }
  handleButtonEvnet(event:any)
{
console.log(event);

}
}
