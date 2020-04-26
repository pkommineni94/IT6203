import { TestBed } from '@angular/core/testing';

import { CarrentalsService } from './carrentals.service';

describe('CarrentalsService', () => {
  let service: CarrentalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrentalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
