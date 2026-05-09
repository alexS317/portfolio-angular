import { Component, inject } from '@angular/core';
import { ExperienceCard } from './components/experience-card/experience-card';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Experience } from '../../models/experience.model';
import { SkillList } from '../../models/skill-list.model';
import { SkillSection } from './components/skill-section/skill-section';

@Component({
  selector: 'app-home-page',
  imports: [TranslatePipe, ExperienceCard, SkillSection],
  templateUrl: './home-page.html',
})
export class HomePage {
  private translateService = inject(TranslateService);
  protected readonly jobs = toSignal<Experience[]>(
    this.translateService.stream('app.home.jobList'),
  );
  protected readonly educations = toSignal<Experience[]>(
    this.translateService.stream('app.home.educationList'),
  );
  protected readonly skillSections = toSignal<SkillList[]>(
    this.translateService.stream('app.home.skillSections'),
  );
}
