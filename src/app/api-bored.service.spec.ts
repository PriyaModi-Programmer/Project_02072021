import { TestBed } from '@angular/core/testing';

import { ApiBoredService } from './api-bored.service';

describe('ApiBoredService', () => {
  let service: ApiBoredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBoredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
