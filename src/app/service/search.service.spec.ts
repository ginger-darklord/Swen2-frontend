import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get number correctly', () => {
    const testKeyword = 'meow';
    service.setKeyword(testKeyword);
    const retrievedNumber = service.getKeyword();
    expect(retrievedNumber).toEqual(testKeyword);
  });
});
