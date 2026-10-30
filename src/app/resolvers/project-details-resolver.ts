import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Project } from '../models/project.model';
import { inject } from '@angular/core';
import { ProjectsService } from '../services/projects-service';
import { TranslateService } from '@ngx-translate/core';

export const projectDetailsResolver: ResolveFn<Project | null> = (
  route: ActivatedRouteSnapshot,
) => {
  const translateService = inject(TranslateService);
  const projectsService = inject(ProjectsService);
  const projectId = route.paramMap.get('projectId');

  return projectsService.getProject(`${projectId}.${translateService.getCurrentLang()}.md`);
};
