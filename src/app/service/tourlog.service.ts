import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tourlog} from "../tourlog";

@Injectable({
  providedIn: 'root'
})
export class TourlogService {
  private tourLogUrl:string;
  constructor(private http: HttpClient) {
    this.tourLogUrl = 'http://localhost:8080/tourlog';
  }

  public createTourLog(tourlog: Tourlog) {
    return this.http.post<Tourlog>(this.tourLogUrl + '/create', tourlog);
  }

  public getTourlogsByTour(tourId: number) {
    return this.http.get<Tourlog[]>(this.tourLogUrl + '/' + tourId + '/tourlogs');
  }

  public deleteTourlog(id : number | undefined) {
    return this.http.delete<Tourlog>(this.tourLogUrl + '/' + id);
  }

  public updateTourlog(tourlog : Tourlog) {
    return this.http.put<Tourlog>(this.tourLogUrl + '/' + tourlog.id, tourlog);
  }

}

