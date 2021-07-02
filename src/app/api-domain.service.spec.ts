import { TestBed } from '@angular/core/testing';

import { ApiDomainService } from './api-domain.service';

describe('ApiDomainService', () => {
  let service: ApiDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
