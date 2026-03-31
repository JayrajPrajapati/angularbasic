import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user-response-Interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BaseURL = "http://localhost:3000/user";
  constructor(private http: HttpClient) { }
  getUserList() {
    return this.http.get<User[]>(this.BaseURL);
  }
  addUser(userObj: User) {
    return this.http.post<User>(this.BaseURL, userObj);
  }
  deleteUser(id: number | string | undefined) {
    return this.http.delete<User>(`${this.BaseURL}/${id}`)
  }
  getUserById(id: number | string) {
    return this.http.get<User>(`${this.BaseURL}/${id}`);
  }

  updateUser(id: number | string, data: User) {
    return this.http.put(`${this.BaseURL}/${id}`, data);
  }
}
