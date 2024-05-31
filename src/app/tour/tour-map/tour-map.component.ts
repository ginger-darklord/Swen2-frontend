import { Component, AfterViewInit} from '@angular/core';
import * as L from 'leaflet';
import {MarkerService} from "../../service/marker.service";
import {LayerGroup} from "leaflet";

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-tour-map',
  templateUrl: './tour-map.component.html',
  styleUrl: './tour-map.component.css'
})
export class TourMapComponent implements AfterViewInit{
  // @ts-ignore
  private map;


  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    tiles.addTo(this.map);
  }
  constructor(private markerService: MarkerService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
  }
}
