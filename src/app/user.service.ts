import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';
  users: User[] = []
  errorMessage = { status: '' }

  async getAllUsers(): Promise<User[]> {
    const allUsers = await fetch(this.baseUrl)
    return await allUsers.json() ?? [];
  }

  async getUserById(id: number): Promise<User | typeof this.errorMessage> {
    const userById = await fetch(this.baseUrl + `/${id}`)
    if (userById.status >= 400) return this.errorMessage = { status: userById.status.toString() };
    return await userById.json();
  }
}
