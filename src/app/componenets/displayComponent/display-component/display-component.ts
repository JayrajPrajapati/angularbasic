import { Component } from '@angular/core';
import { Counter } from '../../../services/counter';

@Component({
  selector: 'app-display-component',
  imports: [],
  templateUrl: './display-component.html',
  styleUrl: './display-component.css',
})
export class DisplayComponent {
  constructor(public counterService:Counter)
  {}
}
