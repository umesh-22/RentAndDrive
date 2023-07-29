import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostloginComponent } from './hostlogin.component';

describe('HostloginComponent', () => {
  let component: HostloginComponent;
  let fixture: ComponentFixture<HostloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostloginComponent]
    });
    fixture = TestBed.createComponent(HostloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
