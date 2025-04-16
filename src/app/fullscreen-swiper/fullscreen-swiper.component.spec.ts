import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenSwiperComponent } from './fullscreen-swiper.component';

describe('FullscreenSwiperComponent', () => {
  let component: FullscreenSwiperComponent;
  let fixture: ComponentFixture<FullscreenSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
