import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

import { buildInfo } from '../../../environments/build-info';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, DatePipe],
  templateUrl: './footer.html',
})
export class Footer {
  private translateService = inject(TranslateService);
  protected readonly email = toSignal<string>(this.translateService.stream('app.home.links.email'));
  protected readonly lastUpdated = signal<string>(buildInfo.lastUpdated ?? new Date().toString());
}
