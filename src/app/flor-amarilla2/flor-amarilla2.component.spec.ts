import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorAmarilla2Component } from './flor-amarilla2.component';

describe('FlorAmarilla2Component', () => {
  let component: FlorAmarilla2Component;
  let fixture: ComponentFixture<FlorAmarilla2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlorAmarilla2Component]
    });
    fixture = TestBed.createComponent(FlorAmarilla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
