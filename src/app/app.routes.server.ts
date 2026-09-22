import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { firstValueFrom } from 'rxjs';
import { ProjectsService } from './services/projects-service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:projectCategory/:projectId',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,

    async getPrerenderParams() {
      const projectsService = inject(ProjectsService);
      const projects = await firstValueFrom(projectsService.getAllProjects('en'), {
        defaultValue: [],
      });
      return projects.map(p => ({
        projectCategory: p.category,
        projectId: p.id,
      }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
