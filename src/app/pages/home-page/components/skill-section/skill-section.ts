import { Component, input } from '@angular/core';
import { SkillList } from '../../../../models/skill-list.model';

@Component({
  selector: 'app-skill-section',
  imports: [],
  templateUrl: './skill-section.html',
  styles: ``,
})
export class SkillSection {
  public skills = input.required<SkillList>();
}
