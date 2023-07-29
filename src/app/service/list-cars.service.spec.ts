import { TestBed } from '@angular/core/testing';

import { ListCarsService } from './list-cars.service';

describe('ListCarsService', () => {
  let service: ListCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
