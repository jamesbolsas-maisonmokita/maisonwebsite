import { Directive, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';

declare var Hammer: any;

@Directive({
  selector: '[appSwipe]',
  standalone: true
})
export class SwipeDirective implements AfterViewInit {
  @Output() swipeLeft = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const hammer = new Hammer(this.elementRef.nativeElement);
    
    hammer.on('swipeleft', () => {
      console.log('Swipe left detected');
      this.swipeLeft.emit();
    });
    
    hammer.on('swiperight', () => {
      console.log('Swipe right detected');
      this.swipeRight.emit();
    });
  }
}