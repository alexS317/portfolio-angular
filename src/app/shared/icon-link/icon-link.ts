import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  imports: [],
  templateUrl: './icon-link.html',
})
export class IconLink {
  public linkType = input<'link' | 'mail'>('link');
  public primeIcon = input<string>();
  public link = input.required<string>();
}
