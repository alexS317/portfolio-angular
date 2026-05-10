import { Component, computed, inject } from '@angular/core';
import { Project } from '../../models/project.model';
import { ToolTag } from './components/tool-tag/tool-tag';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectsService } from '../../services/projects-service';
import { TranslatePipe } from '@ngx-translate/core';
import { MediaCarousel } from './components/media-carousel/media-carousel';

@Component({
  selector: 'app-project-page',
  imports: [ToolTag, RouterLink, TranslatePipe, MediaCarousel],
  templateUrl: './project-page.html',
})
export class ProjectPage {
  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);

  protected readonly project = toSignal<Project | undefined>(
    this.route.paramMap.pipe(
      map(params => this.projectsService.getProject(params.get('projectId') ?? '')),
    ),
  );

  protected readonly semester = computed<string>(() => {
    if (!this.project()?.semester) {
      return '';
    }

    switch (this.project()?.semester) {
      case '1':
        return '1st';
      case '2':
        return '2nd';
      case '3':
        return '3rd';
      default:
        return this.project()?.semester + 'th';
    }
  });
}
