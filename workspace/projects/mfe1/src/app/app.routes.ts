import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/page-1.component').then((c) => c.Page1Component),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
