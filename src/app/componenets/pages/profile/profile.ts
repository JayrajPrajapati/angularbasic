import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  id = signal(0);
  fromPage = signal('');

  constructor(public router: ActivatedRoute) { }
  ngOnInit() {
    this.router.queryParams.subscribe((param) => {
      this.id.set(param['id']);
      this.fromPage.set(param['fromPage'])
    })
  }
}
