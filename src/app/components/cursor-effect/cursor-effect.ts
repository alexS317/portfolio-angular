import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-cursor-effect',
  imports: [],
  templateUrl: './cursor-effect.html',
  host: { '(window:mousemove)': 'onMouseMove($event)' },
})
export class CursorEffect {
  protected readonly mouseX = signal<number>(0);
  protected readonly mouseY = signal<number>(0);
  protected readonly transformPosition = computed<string>(
    () => `translate(${this.mouseX()}px, ${this.mouseY()}px)`,
  );

  onMouseMove(event: MouseEvent): void {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }
}
