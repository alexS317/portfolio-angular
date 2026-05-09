import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
})
export class Footer {
  private translateService = inject(TranslateService);
  protected readonly email = toSignal<string>(this.translateService.stream('app.home.links.email'));
}
