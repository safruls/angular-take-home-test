import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: '', title: 'Users List', loadComponent: () => import('./users-list/users-list.component').then(component => component.UserListComponent)},
  {
    path: 'details/:id',
    title: 'User details',
    loadComponent: () => import('./user-details/user-details.component').then(component => component.UserDetailsComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
