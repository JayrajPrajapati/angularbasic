import { Component, signal } from '@angular/core';
import { UserService } from '../../../service/user/user-service';
import { User } from '../../../service/user/user-response-Interface';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [TitleCasePipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userList = signal<User[] | undefined>(undefined);
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userService.getUserList().subscribe((data) => {
      this.userList.set(data)
    })
  }
  deleteUser(id: number | string | undefined) {
    const isConfirmed = confirm('Are you sure you want to delete this user?');
    if (isConfirmed) {
      this.userService.deleteUser(id).subscribe((data) => {
        this.getUser();
      });
    }
  }
  editUser(id: number | string) {
    console.log(id);
    
    this.router.navigate(['/editUser', id]);
  }

}
