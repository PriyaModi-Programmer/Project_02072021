import { TestBed } from '@angular/core/testing';

import { ApiRFoodService } from './api-rfood.service';

describe('ApiRFoodService', () => {
  let service: ApiRFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
