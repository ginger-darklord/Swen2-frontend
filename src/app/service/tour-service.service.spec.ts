import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TourService } from './tour.service';
import { Tour } from '../tour';
import { Observable } from 'rxjs';

describe('TourService', () => {
  let service: TourService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TourService]
    });
    service = TestBed.inject(TourService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a tour', () => {
    const mockTour: Tour = {
      id: 1,
      name: 'test',
      description: 'description',
      departure: 'departure',
      arrival: 'arrival',
      transportType: 'train',
      distance: 11,
      estimatedTime: '22 hours'
    };

    service.createTour(mockTour).subscribe(result => {
      expect(result).toEqual(mockTour);
    });

    const req = httpMock.expectOne('http://localhost:8080/tour/create');
    expect(req.request.method).toBe('POST');
    req.flush(mockTour);
  });

  it('should find all tours', () => {
    const mockTours: Tour[] = [
      { id: 1, name: 'tour 1', description: 'description 1', departure: 'departure 1', arrival: 'arrival 1', transportType: 'train', distance: 10, estimatedTime: '2 hours' },
      { id: 2, name: 'tour 2', description: 'description 2' , departure: 'departure 2', arrival: 'arrival 2', transportType: 'train', distance: 12, estimatedTime: '4 hours'}
    ];

    service.findAll().subscribe(result => {
      expect(result).toEqual(mockTours);
    });

    const req = httpMock.expectOne('http://localhost:8080/tour/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockTours);
  });

  it('should find tour by id', () => {
    const mockId = 9;
    const mockTour: Tour = { id: mockId, name: 'tour', description: 'description', departure: 'departure', arrival: 'arrival', transportType: 'train', distance: 22, estimatedTime: '3 hours' };

    service.findById(mockId).subscribe(result => {
      expect(result).toEqual(mockTour);
    });

    const req = httpMock.expectOne(`http://localhost:8080/tour/id/${mockId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTour);
  });

  it('should delete a tour', () => {
    const mockId = 1;

    service.deleteTour(mockId).subscribe(result => {
      //checks if response is null
      expect(result).toBeNull();
    });

    const req = httpMock.expectOne(`http://localhost:8080/tour/${mockId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('should search for tours', () => {
    const mockKeyword = 'test';
    const mockSearchResult: Tour[] = [
      { id: 1, name: 'test tour 1', description: 'description 1', departure: 'departure 1', arrival: 'arrival 1', transportType: 'train', distance: 10, estimatedTime: '2 hours' },
      { id: 2, name: 'test tour 2', description: 'description 2' , departure: 'departure 2', arrival: 'arrival 2', transportType: 'train', distance: 12, estimatedTime: '4 hours'}
    ];

    service.search(mockKeyword).subscribe(searchResult => {
      expect(searchResult).toEqual(mockSearchResult);
    });

    const req = httpMock.expectOne(`http://localhost:8080/tour/search`);
    expect(req.request.method).toBe('GET');
    req.flush(mockSearchResult);
  });

});
