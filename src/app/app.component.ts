import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullscreenSwiperComponent } from "./fullscreen-swiper/fullscreen-swiper.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FullscreenSwiperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-world-site';
}
