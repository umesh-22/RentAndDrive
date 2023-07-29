import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostRegisterListComponent } from './host-register-list.component';

describe('HostRegisterListComponent', () => {
  let component: HostRegisterListComponent;
  let fixture: ComponentFixture<HostRegisterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostRegisterListComponent]
    });
    fixture = TestBed.createComponent(HostRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
