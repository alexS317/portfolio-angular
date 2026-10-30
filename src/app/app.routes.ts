import { Routes } from '@angular/router';
import { projectsResolver } from './resolvers/projects-resolver';
import { projectDetailsResolver } from './resolvers/project-details-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage),
    resolve: {
      projects: projectsResolver,
    },
  },
  {
    path: 'projects/:projectCategory/:projectId',
    loadComponent: () => import('./pages/project-page/project-page').then(m => m.ProjectPage),
    resolve: {
      project: projectDetailsResolver,
    },
  },
  { path: '**', redirectTo: '' },
];
