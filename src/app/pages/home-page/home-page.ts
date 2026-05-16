import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  inject,
  viewChildren,
} from '@angular/core';
import { ExperienceCard } from './components/experience-card/experience-card';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Experience } from '../../models/experience.model';
import { SkillList } from '../../models/skill-list.model';
import { SkillSection } from './components/skill-section/skill-section';
import { IconLink } from './components/icon-link/icon-link';
import { ProjectsService } from '../../services/projects-service';
import { ProjectCard } from './components/project-card/project-card';
import { ScrollHelperService } from '../../services/scroll-helper-service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [TranslatePipe, ExperienceCard, SkillSection, IconLink, ProjectCard, NgOptimizedImage],
  templateUrl: './home-page.html',
})
export class HomePage {
  private readonly translateService = inject(TranslateService);
  private readonly projectsService = inject(ProjectsService);
  private readonly navHelperService = inject(ScrollHelperService);

  protected readonly categoryHeadings = viewChildren<ElementRef<HTMLHeadingElement>>('category');
  protected readonly universityProjects = computed(() =>
    this.projectsService.getUniversityProjects(),
  );
  protected readonly personalProjects = computed(() => this.projectsService.getPersonalProjects());
  protected readonly jobs = toSignal<Experience[]>(
    this.translateService.stream('app.home.jobsList'),
  );
  protected readonly educations = toSignal<Experience[]>(
    this.translateService.stream('app.home.educationsList'),
  );
  protected readonly skillSections = toSignal<SkillList[]>(
    this.translateService.stream('app.home.skillSectionsList'),
  );

  constructor() {
    afterNextRender(() => {
      this.navHelperService.setBaseUrls(['/projects/']);

      this.categoryHeadings().find(e => {
        if (this.navHelperService.getScrollTarget()?.includes(e.nativeElement.id)) {
          e.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}
