import { Component } from '@angular/core';
import {Tourlog} from "../../tourlog";
import {TourlogService} from "../../service/tourlog.service";
import {NumberService} from "../../service/number.service";
import {Tour} from "../../tour";
import {TourService} from "../../service/tour-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tourlog-form',
  templateUrl: './tourlog-form.component.html',
  styleUrl: './tourlog-form.component.css'
})
export class TourlogFormComponent {
  tourlog: Tourlog;
  tourId: number;

  constructor(public tourlogService : TourlogService, public numberService: NumberService) {
    this.tourlog = new Tourlog();
    this.tourId = numberService.getNumber();
  }

  onSubmit(){
    this.tourlog.tourId = this.tourId;
    this.tourlogService.createTourLog(this.tourlog).subscribe(()=> {
        console.log('created tourlog successfully');
      },
      error => {
        console.error('error with creating tourlog', error);
        console.error(this.tourId, error);
        console.error(this.tourlog.tourId, error);
      });
  }
}
