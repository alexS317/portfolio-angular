import { Component, input } from '@angular/core';
import { Project } from '../../../../models/project.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styles: ``,
})
export class ProjectCard {
  project = input.required<Project>();
}
