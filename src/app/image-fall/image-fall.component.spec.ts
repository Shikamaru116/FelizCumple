import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFallComponent } from './image-fall.component';

describe('ImageFallComponent', () => {
  let component: ImageFallComponent;
  let fixture: ComponentFixture<ImageFallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageFallComponent]
    });
    fixture = TestBed.createComponent(ImageFallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
