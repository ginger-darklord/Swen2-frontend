import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as L from 'leaflet';
import {LayerGroup} from "leaflet";

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '../assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient) { }

  makeCapitalMarkers(map: L.Map | LayerGroup<any>): void {
    this.http.get(this.capitals).subscribe((result: any) => {
      for (const c of result.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        marker.addTo(map)
      }
    });
  }
}
