import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, SkeletonLoaderComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})

export class UserListComponent implements OnInit {
  isLoading: boolean = false
  users: User[] = []
  userService: UserService = inject(UserService)
  errorMessage: string = ''

  ngOnInit(): void {
    this.isLoading = true
    this.userService.getAllUsers().then(allUsers => {
      this.users = allUsers;
    }).catch(err => {
      this.errorMessage = 'An error occurred while fetching data';
      console.log('Error:', err);
    }).finally(() => this.isLoading = false)
  }
}
