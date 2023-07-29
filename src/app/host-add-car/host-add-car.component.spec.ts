import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAddCarComponent } from './host-add-car.component';

describe('HostAddCarComponent', () => {
  let component: HostAddCarComponent;
  let fixture: ComponentFixture<HostAddCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostAddCarComponent]
    });
    fixture = TestBed.createComponent(HostAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
