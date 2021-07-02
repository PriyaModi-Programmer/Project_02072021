import { TestBed } from '@angular/core/testing';

import { ApiShowService } from './api-show.service';

describe('ApiUniService', () => {
  let service: ApiShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
