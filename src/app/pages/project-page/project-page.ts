import { afterNextRender, Component, computed, inject, input } from '@angular/core';
import { ToolTag } from './components/tool-tag/tool-tag';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MediaCarousel } from './components/media-carousel/media-carousel';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-page',
  imports: [ToolTag, RouterLink, TranslatePipe, MediaCarousel],
  templateUrl: './project-page.html',
})
export class ProjectPage {
  private readonly translateService = inject(TranslateService);
  protected readonly project = input.required<Project>();

  protected readonly semester = computed<string>(() => {
    if (!this.project()?.semester) {
      return '';
    }

    if (this.translateService.getCurrentLang() === 'en') {
      switch (this.project()?.semester) {
        case 1:
          return '1st';
        case 2:
          return '2nd';
        case 3:
          return '3rd';
        default:
          return this.project()?.semester + 'th';
      }
    } else {
      return this.project()?.semester + '.';
    }
  });

  constructor() {
    afterNextRender(() => {
      window.scrollTo({ top: 0 });
    });
  }
}
