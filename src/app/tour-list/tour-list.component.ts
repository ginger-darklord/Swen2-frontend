import { Component } from '@angular/core';
import {Tour} from "../tour";
import {TourService} from "../service/tour-service.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {

  tour: Tour[] | undefined;

  constructor(private tourService: TourService) {
  }

  ngOnInit() {
    this.tourService.findAll().subscribe(data => {
      this.tour = data;
    })
  }
}
