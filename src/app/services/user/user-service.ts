import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserDetails(): Array<{ id: number; name: string; city: string; email: string }> {
  return [
    { id: 1, name: 'Jayraj', city: 'Ahmedabad', email: 'jayraj@example.com' },
    { id: 2, name: 'Amit', city: 'Surat', email: 'amit@example.com' },
    { id: 3, name: 'Neha', city: 'Mumbai', email: 'neha@example.com' },
    { id: 4, name: 'Riya', city: 'Pune', email: 'riya@example.com' }
  ];
}
}
