import { Component, signal } from '@angular/core';
import { UserService } from '../../../../services/user/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userDetailsList : any=signal('');
  constructor(public userService:UserService){    
  }
  ngOnInit(){
      this.userDetailsList.set(this.userService.getUserDetails());
    }
}
