import { Component, input } from '@angular/core';
import { Project } from '../../../../models/project.model';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ToolTag } from '../../../project-page/components/tool-tag/tool-tag';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, NgOptimizedImage, ToolTag],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  project = input.required<Project>();
}
