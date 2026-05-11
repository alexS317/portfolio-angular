import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private translateService = inject(TranslateService);
  private projects = toSignal<Project[]>(this.translateService.stream('app.project.projectsList'));

  public getAllProjects(): Project[] {
    return this.projects() ?? [];
  }

  public getUniversityProjects(): Project[] {
    return this.projects()?.filter(p => p.semester !== undefined) ?? [];
  }

  public getPersonalProjects(): Project[] {
    return this.projects()?.filter(p => p.semester === undefined) ?? [];
  }

  public getProject(id: string): Project | undefined {
    return this.projects()?.find(p => p.id === id);
  }
}
