import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../../service/tour-service.service";

import {Tour} from "../../tour";

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrl: './tour-form.component.css'
})
export class TourFormComponent {
  tour: Tour;

  constructor(private route: ActivatedRoute, private router: Router, private tourService: TourService) {
    this.tour = new Tour();
  }

  onSubmit() {
    this.tourService.createTour(this.tour).subscribe(result => this.gotoTourList());
  }

  gotoTourList() {
    this.router.navigate(['/all']);
  }
}
