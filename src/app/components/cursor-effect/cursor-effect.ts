import { Component, computed, signal, OnDestroy, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-cursor-effect',
  imports: [],
  templateUrl: './cursor-effect.html',
  host: { '(window:mousemove)': 'onMouseMove($event)' },
})
export class CursorEffect implements OnDestroy {
  private readonly mouseX = signal<number>(0);
  private readonly mouseY = signal<number>(0);
  protected readonly transformPosition = computed<string>(
    () => `translate(${this.mouseX()}px, ${this.mouseY()}px)`,
  );

  private readonly STIFFNESS = 0.15;
  private readonly DAMPING = 0.7;
  private targetX = 0;
  private targetY = 0;
  private posX = 0;
  private posY = 0;
  private velX = 0;
  private velY = 0;
  private lastTime = 0;
  private animId: number | null = null;

  constructor() {
    afterNextRender(() => {
      this.lastTime = performance.now();
      this.animate(this.lastTime);
    });
  }

  ngOnDestroy(): void {
    if (this.animId !== null) {
      cancelAnimationFrame(this.animId);
    }
  }

  onMouseMove(event: MouseEvent): void {
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  // Animation using spring physics (k ... stiffness constant, d ... damping ratio)
  private animate = (time: number): void => {
    // Clamp time to avoid large jumps, keep animation smooth independent from screen frame rate
    const dt = Math.min((time - this.lastTime) / 1000, 0.05);

    // c = 2 * d * √k
    const dampingCoefficient = 2 * this.DAMPING * Math.sqrt(this.STIFFNESS);

    // a = F = x * k - v * c
    const accX = (this.targetX - this.posX) * this.STIFFNESS - this.velX * dampingCoefficient;
    const accY = (this.targetY - this.posY) * this.STIFFNESS - this.velY * dampingCoefficient;

    this.velX += accX * dt;
    this.velY += accY * dt;

    this.posX += this.velX * dt;
    this.posY += this.velY * dt;

    this.mouseX.set(this.posX);
    this.mouseY.set(this.posY);

    this.animId = requestAnimationFrame(this.animate);
  };
}
