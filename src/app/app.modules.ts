import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullscreenSwiperComponent } from './fullscreen-swiper/fullscreen-swiper.component';

// Importiamo SwiperModule
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    FullscreenSwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }