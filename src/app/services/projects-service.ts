import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import frontmatter from 'front-matter';

type ProjectFrontMatter = Omit<Project, 'description'>;

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private http = inject(HttpClient);
  private translateService = inject(TranslateService);

  public getAllProjects(lang?: string): Observable<Project[]> {
    if (!lang) {
      lang = this.translateService.getCurrentLang();
    }

    return this.http.get<string[]>('/content/projects/index.json').pipe(
      map(projects => projects.filter(p => p.includes(`.${lang}.`))),
      switchMap(files =>
        files.length ? forkJoin(files.map(filename => this.getProject(filename))) : of([]),
      ),
      map(projects => projects.filter((p): p is Project => p !== null)),
    );
  }

  public getProject(filename: string): Observable<Project | null> {
    return this.http.get(`/content/projects/${filename}`, { responseType: 'text' }).pipe(
      map(content => {
        const parsed = frontmatter<ProjectFrontMatter>(content);
        return {
          ...parsed.attributes,
          description: parsed.body,
        };
      }),
      catchError(() => of(null)),
    );
  }
}
