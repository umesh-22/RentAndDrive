import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostersCarComponent } from './hosters-car.component';

describe('HostersCarComponent', () => {
  let component: HostersCarComponent;
  let fixture: ComponentFixture<HostersCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostersCarComponent]
    });
    fixture = TestBed.createComponent(HostersCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
