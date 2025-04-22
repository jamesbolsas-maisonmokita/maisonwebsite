import { Routes } from '@angular/router';
import { FullscreenPageComponent } from './features/gallery/components/fullscreen-page/fullscreen-page.component';

export const routes: Routes = [
  { path: '', component: FullscreenPageComponent },
  { path: '**', redirectTo: '' }
];