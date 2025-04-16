import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Mousewheel, Keyboard } from 'swiper';

// Installa i moduli Swiper necessari
SwiperCore.use([Navigation, Mousewheel, Keyboard]);

@Component({
  selector: 'app-fullscreen-swiper',
  templateUrl: './fullscreen-swiper.component.html',
  styleUrls: ['./fullscreen-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FullscreenSwiperComponent implements OnInit {
  // Array delle pagine del labirinto
  pages = [
    { 
      id: 'home',
      backgroundImage: 'assets/images/home-bg.jpg',
      title: 'Benvenuto',
      subtitle: 'Scorri per iniziare il viaggio',
      links: [
        { to: 1, direction: 'right', text: 'Inizia' }
      ]
    },
    { 
      id: 'page1',
      backgroundImage: 'assets/images/page1-bg.jpg',
      title: 'Primo Passaggio',
      subtitle: 'Scopri dove ti porta questo sentiero',
      links: [
        { to: 0, direction: 'left', text: 'Torna Indietro' },
        { to: 2, direction: 'right', text: 'Continua' }
      ]
    },
    { 
      id: 'page2',
      backgroundImage: 'assets/images/page2-bg.jpg',
      title: 'Bivio',
      subtitle: 'Scegli la tua direzione',
      links: [
        { to: 1, direction: 'left', text: 'Torna Indietro' },
        { to: 3, direction: 'right', text: 'Destra' },
        { to: 4, direction: 'up', text: 'Su' }
      ]
    },
    { 
      id: 'page3',
      backgroundImage: 'assets/images/page3-bg.jpg',
      title: 'Percorso Destro',
      subtitle: 'Hai scelto di andare a destra',
      links: [
        { to: 2, direction: 'left', text: 'Torna Indietro' }
      ]
    },
    { 
      id: 'page4',
      backgroundImage: 'assets/images/page4-bg.jpg',
      title: 'Percorso Superiore',
      subtitle: 'Hai scelto di andare in alto',
      links: [
        { to: 2, direction: 'down', text: 'Torna Indietro' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  // Metodo per navigare programmaticamente a una pagina specifica
  navigateTo(index: number): void {
    // La logica per navigare sarà implementata con Swiper
  }
}