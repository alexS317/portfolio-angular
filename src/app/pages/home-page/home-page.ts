import { Component, computed, inject } from '@angular/core';
import { ExperienceCard } from './components/experience-card/experience-card';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Experience } from '../../models/experience.model';
import { SkillList } from '../../models/skill-list.model';
import { SkillSection } from './components/skill-section/skill-section';
import { IconLink } from './components/icon-link/icon-link';
import { ProjectsService } from '../../services/projects-service';
import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-home-page',
  imports: [TranslatePipe, ExperienceCard, SkillSection, IconLink, ProjectCard],
  templateUrl: './home-page.html',
})
export class HomePage {
  private translateService = inject(TranslateService);
  private projectsService = inject(ProjectsService);

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
}
