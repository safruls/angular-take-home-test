import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, SkeletonLoaderComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute)
  userId = -1
  userService = inject(UserService)
  user: User | undefined
  isLoading: boolean = false
  errorMessage: string = ''

  constructor() {}

  ngOnInit(): void {
    this.isLoading = true
    const userId = Number(this.route.snapshot.params['id'])
    this.userService.getUserById(userId).then(userById => {
      this.user = userById
    }).catch(err => {
      this.errorMessage = 'An error occurred while fetching data';
      console.log('Error:', err);
    }).finally(() => this.isLoading = false)
  }
}
