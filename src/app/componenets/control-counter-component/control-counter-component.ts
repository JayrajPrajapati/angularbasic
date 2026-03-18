import { Component } from '@angular/core';
import { Counter } from '../../services/counter';

@Component({
  selector: 'app-control-counter-component',
  imports: [],
  templateUrl: './control-counter-component.html',
  styleUrl: './control-counter-component.css',
})
export class ControlCounterComponent {
  constructor(public counterService: Counter) { }
}
