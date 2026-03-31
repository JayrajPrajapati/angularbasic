import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserList } from './components/user/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet,UserList,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
