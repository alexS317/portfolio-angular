import { Component, input } from '@angular/core';
import { Project } from '../../../../models/project.model';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  project = input.required<Project>();
}
