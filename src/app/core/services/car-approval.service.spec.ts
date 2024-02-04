import { TestBed } from '@angular/core/testing';

import { CarApprovalService } from './car-approval.service';

describe('CarApprovalService', () => {
  let service: CarApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
