import { Component, OnInit } from '@angular/core';
import {NumberService} from "../../service/number.service";
import {TourService} from "../../service/tour-service.service";
import {Tour} from "../../tour";

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrl: './tour-detail.component.css'
})
export class TourDetailComponent {
  tourId: number = 0;
  tour: Tour| undefined;

  constructor(public numberService: NumberService, public tourService: TourService) {
  }

  ngOnInit(): void {
    this.tourId = this.numberService.getNumber();
    console.log(this.tourId);
    this.tourService.findById(this.tourId).subscribe(data => {
      this.tour = data;
    })
  }
}
