import { Component, OnInit } from '@angular/core';
import {NumberService} from "../../service/number.service";
import {TourService} from "../../service/tour.service";
import {Tour} from "../../tour";
import {TourlogService} from "../../service/tourlog.service";
import {Tourlog} from "../../tourlog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrl: './tour-detail.component.css'
})
export class TourDetailComponent {
  tourId!: number;
  tour: Tour| undefined;
  tourlogs: Tourlog[] | undefined;

  constructor(public numberService: NumberService, public tourService: TourService, public tourlogService: TourlogService, public router: Router) {
  }

  ngOnInit(): void {
    this.tourId = this.numberService.getNumber();
    console.log(this.tourId);
    this.tourService.findById(this.tourId).subscribe(data => {
      this.tour = data;
    })

    this.tourlogService.getTourlogsByTour(this.tourId).subscribe(logs => {
      this.tourlogs = logs;
    })
  }

  tourlogDelete(id: number | undefined) {
    this.tourlogService.deleteTourlog(id).subscribe(
      () => {
        console.log('Tourlog deleted successfully');
        this.router.navigate(['/all'])
      },
      error => {
        console.error('Tourlog not deleted successfully', error);
      }
    );
  }
}
