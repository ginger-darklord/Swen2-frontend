import { Component } from '@angular/core';
import {Tour} from "../../tour";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-tour-update',
  templateUrl: './tour-update.component.html',
  styleUrl: './tour-update.component.css'
})
export class TourUpdateComponent {
  tour: Tour;


  constructor(private tourService: TourService) {
    this.tour = new Tour();
  }
  onSubmit() {
    this.tourService.updateTour(this.tour).subscribe(
      ()=> {
        console.log('updated successfully');
      },
        error => {
        console.log('error with updating', error);
      }
    )
  }

}
