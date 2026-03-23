import { Component, signal } from '@angular/core';
import { UserService } from '../../../../services/user/user-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-details',
  imports: [CommonModule],
  templateUrl: './users-details.html',
  styleUrl: './users-details.css',
})
export class UsersDetails {
   userDetails : any=signal('');
  constructor(public userService:UserService,public route:ActivatedRoute){    
  }
  ngOnInit(){
      const getUserDetails =this.userService.getUserDetails();
      this.route.params.subscribe((param)=>{
        const user = getUserDetails.filter((user)=>user.id == param['id']);
         this.userDetails.set(user);
      })
    }
}
