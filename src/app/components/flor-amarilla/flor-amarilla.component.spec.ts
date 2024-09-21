import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorAmarillaComponent } from './flor-amarilla.component';

describe('FlorAmarillaComponent', () => {
  let component: FlorAmarillaComponent;
  let fixture: ComponentFixture<FlorAmarillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlorAmarillaComponent]
    });
    fixture = TestBed.createComponent(FlorAmarillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
