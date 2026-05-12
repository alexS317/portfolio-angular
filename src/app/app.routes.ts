import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage),
  },
  { path: 'projects', redirectTo: '' },
  { path: 'projects/:projectCategory', redirectTo: '' },
  {
    path: 'projects/:projectCategory/:projectId',
    loadComponent: () => import('./pages/project-page/project-page').then(m => m.ProjectPage),
  },
];
