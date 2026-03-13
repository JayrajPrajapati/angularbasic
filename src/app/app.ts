import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUp } from './componenets/sign-up/sign-up';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignUp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  /*-----------------------------------------
    BASIC PROJECT INFORMATION
  -----------------------------------------*/

  // Angular signal example
  protected readonly title = signal('Angular Basic');

  // Angular version variable
  angularVersion = 'V21.0.0.0';

  // Technology and version
  Tech = 'Angular';
  Version = 21.0;


  /*-----------------------------------------
    STRING INTERPOLATION EXAMPLE
  -----------------------------------------*/

  // Returns HTML string with tech and version
  getTechWithVersion() {
    return "Tech is : <b>" + this.Tech + "</b> & Version is : <b>" + this.Version + "</b>";
  }


  /*-----------------------------------------
    FUNCTION BINDING EXAMPLE
  -----------------------------------------*/

  // Simple function to calculate total
  GetTotal(a: number, b: number) {
    return a + b;
  }


  /*-----------------------------------------
    EVENT BINDING EXAMPLE
  -----------------------------------------*/

  // Simple button click event
  callButtonEvent() {
    alert('Button Event Bind...');
  }

  // Counter example with + and -
  count = 0;

  counter(action: string) {
    if (action === '-') {
      this.count > 0 && this.count--;
    } else {
      this.count++;
    }
  }

  // Generic event handler
  handleEvnet(eventType: string) {
    alert('Event Type is : ' + eventType);
  }


  /*-----------------------------------------
    FUNCTION WITH PARAMETERS
  -----------------------------------------*/

  data = 10;

  updateData(val: number, user: string) {
    this.data = val;

    console.log("User:", user);
    console.log("Sum Result:", this.sum(10, 20));
  }

  // Utility function
  sum(a: number, b: number): number {
    return a + b;
  }

  // Capture full event object
  handleButtonEvnet(event: any) {
    console.log(event);
  }


  /*-----------------------------------------
    PROPERTY BINDING EXAMPLE
  -----------------------------------------*/

  // Used to dynamically disable button
  btnDisableDynamic = true;

  // Toggle button disabled state
  btnToggle() {
    this.btnDisableDynamic = !this.btnDisableDynamic;
  }


  /*-----------------------------------------
    SIGNAL VS NORMAL PROPERTY
  -----------------------------------------*/

  // Simple variable
  simplePropertyData = 0;

  // Angular Signal
  signalPropertyData = signal(0);


  /*-----------------------------------------
    SIGNAL EFFECT
    Runs automatically when signal changes
  -----------------------------------------*/

  // constructor() {
  //   effect(() => {

  //     console.log("Simple Property", this.simplePropertyData);

  //     console.log("Signal Property", this.signalPropertyData());

  //     // Reset signal when value reaches 5
  //     if (this.signalPropertyData() === 5) {
  //       this.signalPropertyData.set(0);
  //       console.log("Signal Property Reset", this.signalPropertyData());
  //     }

  //   });
  // }


  /*-----------------------------------------
    UPDATE METHODS
  -----------------------------------------*/

  updateSimplePropertyData() {
    this.simplePropertyData++;
  }

  updateSinglePropertyData() {
    this.signalPropertyData.set(this.signalPropertyData() + 1);
  }

  //Computed Signal
  height = signal(100);
  width = signal(20);
  area = computed(()=> this.height()*this.width())
  
  handleHeight()
  {
    this.height.set(this.height()+10);
  }
  //Effect Signal
  speed = signal(0);
  color = "blue";
  increaseSpeed()
  {
    this.speed.set(this.speed()+10);
  }
   constructor() {
    effect(() => {
      console.log("Simple Property", this.simplePropertyData);
      console.log("Signal Property", this.signalPropertyData());

      // Reset signal when value reaches 5
      if (this.signalPropertyData() === 5) {
        this.signalPropertyData.set(0);
        console.log("Signal Property Reset", this.signalPropertyData());
      }

      //Effect Signal for Speed
      if (this.speed()>0 && this.speed()<40) {
        this.color='green';
      }
      if (this.speed()>=40 && this.speed()<80) {
        this.color='blue';
      }
      if (this.speed()>=80 && this.speed()<120) {
        this.color='orange';
      }
      if (this.speed()>=120) {
        this.color='red';
      }
      console.log("Speed Increased", this.speed());
    });
  }

  //Data Types in Signal
  user:WritableSignal<string[]> = signal(['Angular','React Js','React Native'])
  getUpdatedUserData()
  {
    console.log("Old Value "+this.user());
    this.user.update((item)=>[...item,'Vue Js'])
    console.log("Updated value" + this.user());
    
  }
  //Counter in Signal
  counterApp:WritableSignal<number>=signal<number>(0);
  incrementCounter()
  {
    this.counterApp.update((val)=>val+1);
  }
  resetCounter()
  {
    this.counterApp.set(0);
  }
  decrementCounter()
  {
    if (this.counterApp()>0) {
      this.counterApp.update((val)=>val-1);
    }
  }
  //Get & Set Input value via Signals
  inputValue :WritableSignal<string>= signal<string>("Intialization");
  setResetInputValue()
  {
    this.inputValue.set("I'm Default Input Value");
  }
  setInputValue(val:string)
  {
    this.inputValue.set(val)
  }
  //Control Flow Statement
  isLogIn = signal(false);
  show = signal(true);
  handleLogin(status:boolean)
  {
    this.isLogIn.set(status)
  }
   //Control Flow  for For loop Statement
 languages:WritableSignal<string[]> = signal(['Angular','React Js','React Native','Vue JS','Node JS'])
 languageDetail = signal([
  {id: 1, name: 'Angular',developedBy: 'Google',latestVersion: 21},
  {id: 2,name: 'React JS',developedBy: 'Meta (Facebook)',latestVersion: 19},
  {id: 3,name: 'React Native',developedBy: 'Meta (Facebook)',latestVersion: 0.74},
  {id: 4,name: 'Vue JS',developedBy: 'Evan You',latestVersion: 3},
  {id: 5,name: 'Node JS',developedBy: 'Ryan Dahl',latestVersion: 22}
]);

//Control Flow for Switch Statement
switchStatus = signal("");
handleSwitch(event:Event)
{
  const target = event.target as HTMLSelectElement;
  this.switchStatus.set(target.value);
}
}