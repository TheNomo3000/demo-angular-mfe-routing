import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page-1',
    loadComponent: () =>
      import('./pages/page-1.component').then((c) => c.Page1Component),
  },
];
