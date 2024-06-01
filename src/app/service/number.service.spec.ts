import { TestBed } from '@angular/core/testing';
import { NumberService } from './number.service';

describe('NumberService', () => {
  let service: NumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberService]
    });
    service = TestBed.inject(NumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get number correctly', () => {
    const testNumber = 123;
    service.setNumber(testNumber);
    const retrievedNumber = service.getNumber();
    expect(retrievedNumber).toEqual(testNumber);
  });
});
