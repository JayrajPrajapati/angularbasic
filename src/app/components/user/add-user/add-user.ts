import { Component, signal } from '@angular/core';
import { User } from '../../../service/user/user-response-Interface';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/user/user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  isEditMode = false;
  userId!: number | string;

  constructor(private userService: UserService, public route: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        debugger;
        this.isEditMode = true;
        this.userId = params['id'];

        this.getUserById(this.userId);
      }
    });
  }
  // ✅ FormControls
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  gender = new FormControl('', Validators.required);
  range = new FormControl('');
  designation = new FormControl('', Validators.required);
  role = new FormControl('', Validators.required);
  expertise = new FormControl('', Validators.required);
  degree = new FormControl('', Validators.required);
  package = new FormControl('', Validators.required);
  mobile = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]);
  bio = new FormControl('', [Validators.required, Validators.minLength(10)]);

  successMessage = '';
  // ✅ Add User
  addUser() {
    this.markAllTouched();

    if (
      this.username.invalid ||
      this.gender.invalid ||
      this.range.invalid ||
      this.designation.invalid ||
      this.role.invalid ||
      this.expertise.invalid ||
      this.degree.invalid ||
      this.package.invalid ||
      this.mobile.invalid ||
      this.bio.invalid
    ) {
      return;
    }
    const userData: User = {
      id: Date.now(),
      username: this.username.value || '',
      gender: this.gender.value || '',
      range: this.range.value || '',
      designation: this.designation.value || '',
      role: this.role.value || '',
      expertise: this.expertise.value || '',
      degree: this.degree.value || '',
      package: this.package.value || '',
      mobile: this.mobile.value || '',
      bio: this.bio.value || ''
    };
    if (this.isEditMode) {
      // 🔥 UPDATE
      this.userService.updateUser(this.userId, userData).subscribe(() => {
        this.route.navigate(['/user']);
      });

    } else {
      // ➕ ADD
      this.userService.addUser(userData).subscribe(() => {
        this.route.navigate(['/user']);
      });
    }
  }
  markAllTouched() {
    this.username.markAsTouched();
    this.gender.markAsTouched();
    this.range.markAsTouched();
    this.designation.markAsTouched();
    this.role.markAsTouched();
    this.expertise.markAsTouched();
    this.degree.markAsTouched();
    this.package.markAsTouched();
    this.mobile.markAsTouched();
    this.bio.markAsTouched();
  }
  editUser(id: number | string) {
    this.route.navigate(['/editUser', id]);
  }
  getUserById(id: number | string) {
    this.userService.getUserById(id).subscribe((user: User) => {
      this.username.setValue(user.username);
      this.gender.setValue(user.gender);
      this.range.setValue(user.range);
      this.designation.setValue(user.designation);
      this.role.setValue(user.role);
      this.expertise.setValue(user.expertise);
      this.degree.setValue(user.degree);
      this.package.setValue(user.package);
      this.mobile.setValue(user.mobile);
      this.bio.setValue(user.bio);
    });
  }
}
