import { TestBed } from '@angular/core/testing';

import { TourlogService } from './tourlog.service';

describe('TourlogService', () => {
  let service: TourlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
