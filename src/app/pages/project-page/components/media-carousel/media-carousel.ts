import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-carousel',
  imports: [NgOptimizedImage],
  templateUrl: './media-carousel.html',
})
export class MediaCarousel implements AfterViewInit, OnDestroy {
  private readonly YOUTUBE_URL_REGEX = /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?#]+)/;
  private readonly SCROLL_INTERVAL_MS = 3000;
  private readonly domSantizer = inject(DomSanitizer);
  public readonly projectId = input.required<string>();
  public readonly mediaItems = input.required<string[]>();
  protected readonly currentItemId = signal<number>(0);
  protected readonly path = computed<string>(() => 'images/projects/' + this.projectId() + '/');
  protected readonly youtubePreviewArray = computed<{ isVideo: boolean; videoId: string }[]>(() =>
    this.mediaItems().map(item => this.handleYoutubeVideoPreview(item)),
  );
  protected readonly carouselContainer = viewChild<ElementRef<HTMLDivElement>>('carouselContainer');
  protected readonly carousel = viewChild<ElementRef<HTMLDivElement>>('carousel');
  protected readonly containerWidth = signal<number>(0);
  protected readonly overlayActive = signal<boolean>(true);
  private resizeObserver!: ResizeObserver;
  private scrollIntervalId!: number;

  ngAfterViewInit() {
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
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
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

  protected sanitizeYoutubeUrl(url: string): SafeResourceUrl {
    return this.domSantizer.bypassSecurityTrustResourceUrl(url);
  }

  private handleYoutubeVideoPreview(url: string): { isVideo: boolean; videoId: string } {
    const youtubeUrlMatch = url.match(this.YOUTUBE_URL_REGEX);

    if (youtubeUrlMatch && youtubeUrlMatch[1]) {
      return {
        isVideo: true,
        videoId: `https://i.ytimg.com/vi/${youtubeUrlMatch[1]}/maxresdefault.jpg`,
      };
    } else {
      return { isVideo: false, videoId: '' };
    }
  }

  private scrollThroughItems(index: number) {
    if (this.carousel()) {
      this.carousel()!.nativeElement.style.transform = `translate(-${this.containerWidth() * index}px)`;
    }
  }
}
