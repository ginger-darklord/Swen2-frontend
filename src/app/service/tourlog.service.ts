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
}

