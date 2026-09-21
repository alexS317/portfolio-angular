import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
  OnDestroy,
  afterNextRender,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-carousel',
  imports: [NgOptimizedImage],
  templateUrl: './media-carousel.html',
})
export class MediaCarousel implements OnDestroy {
  private readonly YOUTUBE_URL_REGEX = /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?#]+)/;
  private readonly SCROLL_INTERVAL_MS = 3000;
  private readonly domSantizer = inject(DomSanitizer);
  public readonly projectId = input.required<string>();
  public readonly mediaItems = input.required<string[]>();
  protected readonly currentItemId = signal<number>(0);
  protected readonly path = computed<string>(() => 'images/projects/' + this.projectId() + '/');
  protected readonly youtubeData = computed<
    { isVideo: boolean; thumbnail: string | null; safeUrl: SafeResourceUrl | null }[]
  >(() => this.mediaItems().map(item => this.handleYoutubeData(item)));
  protected readonly carouselContainer = viewChild<ElementRef<HTMLDivElement>>('carouselContainer');
  protected readonly carousel = viewChild<ElementRef<HTMLDivElement>>('carousel');
  protected readonly containerWidth = signal<number>(0);
  protected readonly overlayActive = signal<boolean>(true);
  private resizeObserver?: ResizeObserver;
  private scrollIntervalId?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => {
      if (this.carouselContainer()) {
        this.resizeObserver = new ResizeObserver(entries => {
          entries.forEach(e => this.containerWidth.set(e.contentRect.width));
        });
        this.resizeObserver.observe(this.carouselContainer()!.nativeElement);

        this.scrollIntervalId = setInterval(() => {
          this.currentItemId.update(i => (i + 1) % this.mediaItems().length);
          this.scrollThroughItems(this.currentItemId());
        }, this.SCROLL_INTERVAL_MS);
      }
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    if (this.scrollIntervalId) {
      clearInterval(this.scrollIntervalId);
    }
  }

  protected onSelectItem(index: number): void {
    this.stopAutoScrolling();
    this.currentItemId.set(index);

    this.scrollThroughItems(index);
  }

  protected stopAutoScrolling(): void {
    clearInterval(this.scrollIntervalId);
    this.overlayActive.set(false);
  }

  private handleYoutubeData(url: string): {
    isVideo: boolean;
    thumbnail: string | null;
    safeUrl: SafeResourceUrl | null;
  } {
    const youtubeUrlMatch = url.match(this.YOUTUBE_URL_REGEX);

    if (youtubeUrlMatch && youtubeUrlMatch[1]) {
      return {
        isVideo: true,
        thumbnail: `https://i.ytimg.com/vi/${youtubeUrlMatch[1]}/maxresdefault.jpg`,
        safeUrl: this.domSantizer.bypassSecurityTrustResourceUrl(url),
      };
    } else {
      return { isVideo: false, thumbnail: null, safeUrl: null };
    }
  }

  private scrollThroughItems(index: number) {
    if (this.carousel()) {
      this.carousel()!.nativeElement.style.transform = `translate(-${this.containerWidth() * index}px)`;
    }
  }
}
