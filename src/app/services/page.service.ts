import { Injectable } from '@angular/core';
import { Page } from '../models/page.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pages: Map<string, Page> = new Map();
  private currentPageSubject = new BehaviorSubject<Page | null>(null);

  constructor() {
    // Inizializza alcune pagine predefinite
    this.initializePages();
    
    // Imposta la pagina iniziale
    const homePage = this.pages.get('home');
    if (homePage) {
      this.currentPageSubject.next(homePage);
    }
  }

  private initializePages() {
    // Pagina iniziale
    this.pages.set('home', {
      id: 'home',
      imageUrl: 'assets/images/home.jpg',
      links: {
        left: 'page1',
        right: 'page2'
      }
    });

    this.pages.set('page1', {
      id: 'page1',
      imageUrl: 'assets/images/page1.jpg',
      links: {
        left: 'page3',
        right: 'home'
      }
    });

    this.pages.set('page2', {
      id: 'page2',
      imageUrl: 'assets/images/page2.jpg',
      links: {
        left: 'home',
        right: 'page4'
      }
    });

    this.pages.set('page3', {
      id: 'page3',
      imageUrl: 'assets/images/page3.jpg',
      links: {
        left: 'page5',
        right: 'page1'
      }
    });

    this.pages.set('page4', {
      id: 'page4',
      imageUrl: 'assets/images/page4.jpg',
      links: {
        left: 'page2',
        right: 'page6'
      }
    });

    // Altre pagine predefinite...
    this.pages.set('page5', {
      id: 'page5',
      imageUrl: 'assets/images/page5.jpg',
      links: {
        left: 'page7',
        right: 'page3'
      }
    });

    this.pages.set('page6', {
      id: 'page6',
      imageUrl: 'assets/images/page6.jpg',
      links: {
        left: 'page4',
        right: 'page8'
      }
    });

    // Aggiungi altre pagine a seconda delle necessità
  }
  private generateNewPage(id: string): Page {
    // Genera un numero casuale per l'immagine
    const randomNum = Math.floor(Math.random() * 10) + 1;
    const imageUrl = `assets/images/generated${randomNum}.jpg`;
    
    // Genera ID casuali per i link
    const leftId = `page_${Math.random().toString(36).substring(2, 9)}`;
    const rightId = `page_${Math.random().toString(36).substring(2, 9)}`;
    
    const newPage: Page = {
      id,
      imageUrl,
      links: {
        left: leftId,
        right: rightId
      }
    };
    
    this.pages.set(id, newPage);
    return newPage;
  }

  getCurrentPage(): Observable<Page | null> {
    return this.currentPageSubject.asObservable();
  }

  navigateTo(pageId: string) {
    let page = this.pages.get(pageId);
    
    // Se la pagina non esiste, generala
    if (!page) {
      page = this.generateNewPage(pageId);
    }
    
    this.currentPageSubject.next(page);
  }

  navigateLeft() {
    const currentPage = this.currentPageSubject.value;
    if (currentPage && currentPage.links.left) {
      this.navigateTo(currentPage.links.left);
    }
  }

  navigateRight() {
    const currentPage = this.currentPageSubject.value;
    if (currentPage && currentPage.links.right) {
      this.navigateTo(currentPage.links.right);
    }
  }
}
