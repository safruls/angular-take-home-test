import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';

  users: User[] = []

  async getAllUsers(): Promise<User[]> {
    const allUsers = await fetch(this.baseUrl)
    return await allUsers.json() ?? [];
  }

}
