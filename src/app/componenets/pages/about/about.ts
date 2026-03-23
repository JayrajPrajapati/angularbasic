import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  @ViewChild("profilePage", { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(public router: Router) {

  }

  redirectToProfile() {
    this.router.navigate(['profile']);
  }
  async dynamicComponentRedirectToProfile() {
    this.container.clear();
    const { Profile } = await import('../profile/profile')
    this.container?.createComponent(Profile);
  }
}
