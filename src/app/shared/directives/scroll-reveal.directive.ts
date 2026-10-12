import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnDestroy, PLATFORM_ID, inject } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>).nativeElement;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  constructor() {
    if (!this.isBrowser) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.element.classList.add(
      'opacity-0',
      'translate-y-8',
      'transition-all',
      'duration-700',
      'ease-out',
    );
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        this.element.classList.remove('opacity-0', 'translate-y-8');
        this.element.classList.add('opacity-100', 'translate-y-0');
        this.observer?.unobserve(this.element);
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    );
    this.observer.observe(this.element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
