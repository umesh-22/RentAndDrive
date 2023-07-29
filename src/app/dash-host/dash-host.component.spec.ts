import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHostComponent } from './dash-host.component';

describe('DashHostComponent', () => {
  let component: DashHostComponent;
  let fixture: ComponentFixture<DashHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashHostComponent]
    });
    fixture = TestBed.createComponent(DashHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
