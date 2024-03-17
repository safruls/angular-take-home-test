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

  async getUserById(id: number): Promise<User | undefined> {
    const userById = await fetch(this.baseUrl + `/${id}`)
    return await userById.json() ?? {}
  }
}
