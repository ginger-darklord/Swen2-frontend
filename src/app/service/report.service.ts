import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private reportUrl : string;
  constructor(private http: HttpClient) {
    this.reportUrl = 'http://localhost:8080/reports'
  }
  public report(id : number | undefined): Observable<Blob> {
    return this.http.get(this.reportUrl + '/tour/' + id, {responseType: 'blob'});
  }
}
