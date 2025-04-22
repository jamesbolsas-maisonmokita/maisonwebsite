import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Page } from '../../../../core/models/page.model';
import { PageService } from '../../../../core/services/page.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SwipeDirective } from '../../../../shared/directives/swipe.directive';

@Component({
  selector: 'app-fullscreen-page',
  standalone: true,
  imports: [CommonModule, SwipeDirective],
  templateUrl: './fullscreen-page.component.html',
  styleUrls: ['./fullscreen-page.component.scss'],
  animations: [
    trigger('slideState', [
      state('normal', style({
        transform: 'translateX(0)'
      })),
      state('slideLeft', style({
        transform: 'translateX(-100%)'
      })),
      state('slideRight', style({
        transform: 'translateX(100%)'
      })),
      transition('normal => slideLeft', animate('300ms ease-out')),
      transition('normal => slideRight', animate('300ms ease-out')),
      transition('slideLeft => normal', animate('300ms ease-in')),
      transition('slideRight => normal', animate('300ms ease-in'))
    ])
  ]
})
export class FullscreenPageComponent implements OnInit, OnDestroy {
  currentPage: Page | null = null;
  animationState: string = 'normal';
  private subscription: Subscription | null = null;
  private lastScrollTime = 0;
  private scrollCooldown = 500; // millisecondi

  // Aggiungi variabili per tracciare gli eventi di mousedown/mouseup
  private isDragging = false;
  private startX = 0;
  private endX = 0;

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    console.log('FullscreenPageComponent inizializzato');
    this.subscription = this.pageService.getCurrentPage().subscribe(page => {
      console.log('Pagina corrente ricevuta:', page);
      this.currentPage = page;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    event.preventDefault();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    this.endX = event.clientX;
    event.preventDefault();
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    const deltaX = this.endX - this.startX;
    
    // Se lo spostamento è maggiore di 50px, consideriamo come swipe
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        console.log('Mouse swipe right');
        this.onSwipeRight();
      } else {
        console.log('Mouse swipe left');
        this.onSwipeLeft();
      }
    }
    
    event.preventDefault();
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    const now = Date.now();
    if (now - this.lastScrollTime < this.scrollCooldown) {
      return;
    }
    
    this.lastScrollTime = now;
    
    // Usa deltaX per lo scorrimento orizzontale
    if (event.deltaX > 50) {
      this.onSwipeLeft();
    } else if (event.deltaX < -50) {
      this.onSwipeRight();
    }
  }

  onSwipeLeft() {
    console.log('Eseguendo swipe left');
    this.animationState = 'slideLeft';
    setTimeout(() => {
      this.pageService.navigateRight();
      this.animationState = 'normal';
    }, 300);
  }

  onSwipeRight() {
    console.log('Eseguendo swipe right');
    this.animationState = 'slideRight';
    setTimeout(() => {
      this.pageService.navigateLeft();
      this.animationState = 'normal';
    }, 300);
  }
}