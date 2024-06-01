import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TourlogService } from './tourlog.service';
import { Tourlog } from '../tourlog';

describe('TourlogService', () => {
  let service: TourlogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TourlogService]
    });
    service = TestBed.inject(TourlogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    //verifys that there are no outstanding http requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a tour log', () => {
    const mockTourlog: Tourlog = {id: 22,tourId:1, comment: 'very nice', date: new Date(), difficulty:3, totalDistance: 10, totalTime: '2 hours', rating: 2};
    service.createTourLog(mockTourlog).subscribe(result => {
      //check if response and data match
      expect(result).toEqual(mockTourlog);
    });

    const req = httpMock.expectOne('http://localhost:8080/tourlog/create');
    expect(req.request.method).toBe('POST');
    //simulates successfull http response
    req.flush(mockTourlog);
  });

  it('should get tour logs by tour ID', () => {
    const mockTourId = 123;
    const mockTourlogs: Tourlog[] = [
      {id: 22,tourId:1, comment: 'very nice', date: new Date(), difficulty:3, totalDistance: 10, totalTime: '2 hours', rating: 2},
      {id: 23,tourId:1, comment: 'very cute', date: new Date(), difficulty:32, totalDistance: 10, totalTime: '3 hours', rating: 1},
    ];
    service.getTourlogsByTour(mockTourId).subscribe(result => {
      expect(result).toEqual(mockTourlogs); // Check if the response matches the mock data
    });

    const req = httpMock.expectOne(`http://localhost:8080/tourlog/${mockTourId}/tourlogs`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTourlogs);
  });
});
