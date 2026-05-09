import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tool-tag',
  imports: [],
  templateUrl: './tool-tag.html',
})
export class ToolTag {
  public tool = input.required<string>();
}
