import { ResolveFn } from '@angular/router';
import { Project } from '../models/project.model';
import { inject } from '@angular/core';
import { ProjectsService } from '../services/projects-service';

export const projectsResolver: ResolveFn<Project[]> = () => {
  const projectsService = inject(ProjectsService);

  return projectsService.getAllProjects();
};
