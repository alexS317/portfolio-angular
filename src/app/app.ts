import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
})
export class App {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }
}
