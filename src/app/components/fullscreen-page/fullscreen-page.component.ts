import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fullscreen-page',
  templateUrl: './fullscreen-page.component.html',
  styleUrls: ['./fullscreen-page.component.css']
})
export class FullscreenPageComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() backgroundImage!: string;
  @Input() links: { direction: string; text: string; to: string }[] = [];
}
