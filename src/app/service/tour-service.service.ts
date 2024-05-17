import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tour} from "../tour";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private tourUrl: string;
  constructor(private http: HttpClient) {
    this.tourUrl = 'http://localhost:8080/tour';
  }

  public createTour(tour: Tour) {
    return this.http.post<Tour>(this.tourUrl + '/create', tour);
  }

  public findAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.tourUrl + '/all')
  }

  public deleteTour(id: number | undefined) {
    return this.http.delete<Tour>(this.tourUrl + '/' + id);
  }

  public updateTour(tour: Tour) {
    return this.http.put<Tour>(this.tourUrl + '/' + tour.id, tour);
  }
}
