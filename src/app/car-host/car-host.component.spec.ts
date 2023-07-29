import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarHostComponent } from './car-host.component';

describe('CarHostComponent', () => {
  let component: CarHostComponent;
  let fixture: ComponentFixture<CarHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarHostComponent]
    });
    fixture = TestBed.createComponent(CarHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
