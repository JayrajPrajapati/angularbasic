import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  getRouteParams = signal('');
  secondParams = signal('');
  constructor(public route:ActivatedRoute){}
  ngOnInit()
  {
this.route.params.subscribe((param)=>{
  console.log(param);
  this.getRouteParams.set(param['data']);
  this.secondParams.set(param['secondObj']);
})
  }
}
