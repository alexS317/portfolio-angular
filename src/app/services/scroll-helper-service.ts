import { inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollHelperService {
  private readonly router = inject(Router);
  private readonly baseUrls = signal<string[]>([]);
  private readonly scrollTargetUrl = signal<string | null>(null);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe(() => {
      if (this.baseUrls().some(u => this.router.url.startsWith(u))) {
        this.scrollTargetUrl.set(this.router.url);
      }
    });
  }

  public setBaseUrls(urls: string[]): void {
    if (!this.baseUrls().some(u => urls.includes(u))) {
      this.baseUrls.update(u => [...u, ...urls]);
      console.log(this.baseUrls());
    }
  }

  public getScrollTarget(): string | null {
    return this.scrollTargetUrl();
  }
}
