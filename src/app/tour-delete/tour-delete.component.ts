import { Component } from '@angular/core';
import {Tour} from "../tour";
import {TourService} from "../service/tour-service.service";

@Component({
  selector: 'app-tour-delete',
  templateUrl: './tour-delete.component.html',
  styleUrl: './tour-delete.component.css'
})
export class TourDeleteComponent {

  tour : Tour;

  constructor(private tourService: TourService) {
    this.tour = new Tour();
  }

  onSubmit() {
    this.tourService.deleteTour(this.tour.id).subscribe(
      () => {
        console.log('Tour deleted successfully');
      },
      error => {
        console.error('Tour not deleted successfully', error);
      }
    );
  }


}
