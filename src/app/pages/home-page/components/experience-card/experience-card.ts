import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Experience } from '../../../../models/experience.model';

@Component({
  selector: 'app-experience-card',
  imports: [TranslatePipe],
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  public experience = input.required<Experience>();
}
