import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenPageComponent } from './components/fullscreen-page/fullscreen-page.component';
import { SwipeDirective } from '../../shared/directives/swipe.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SwipeDirective,
    FullscreenPageComponent
  ],
  exports: [
    FullscreenPageComponent
  ]
})
export class GalleryModule { }