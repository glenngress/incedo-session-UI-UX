import { TestBed } from '@angular/core/testing';

import { AllowanceServService } from './allowance-serv.service';

describe('AllowanceServService', () => {
  let service: AllowanceServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowanceServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
