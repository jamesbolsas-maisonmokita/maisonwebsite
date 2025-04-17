import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { PageService } from '../../services/page.service';
import { Page } from '../../models/page.models';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import Hammer from 'hammerjs';

@Component({
  selector: 'app-fullscreen-page',
  templateUrl: 'fullscreen-page.component.html',
  styleUrls: ['fullscreen-page.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class FullscreenPageComponent implements OnInit, OnDestroy {
  currentPage: Page | null = null;
  private subscription: Subscription | null = null;
  animationState = 'idle';

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.subscription = this.pageService.getCurrentPage().subscribe(page => {
      this.currentPage = page;
    });

    // Inizializza il riconoscimento dei gesti
    const hammertime = new Hammer(document.body);
    hammertime.on('swipeleft', () => {
      this.navigateRight();
    });
    hammertime.on('swiperight', () => {
      this.navigateLeft();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    // Rilevare la direzione dello scroll orizzontale
    if (event.deltaX > 50) {
      this.navigateRight();
    } else if (event.deltaX < -50) {
      this.navigateLeft();
    }
  }

  navigateLeft() {
    this.animationState = 'left';
    this.pageService.navigateLeft();
  }

  navigateRight() {
    this.animationState = 'right';
    this.pageService.navigateRight();
  }
}