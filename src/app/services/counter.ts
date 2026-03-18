import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  globalCounter = signal(0);

  decrementCounter()
  {
    if (this.globalCounter()>0) {
      this.globalCounter.update((item)=>item-1);      
    }
  }
  incrementCounter()
  {
    this.globalCounter.update((item)=>item+1);
  }
  resetCounter()
  {
    this.globalCounter.set(0);
  }
}
