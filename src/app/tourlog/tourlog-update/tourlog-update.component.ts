import { Component } from '@angular/core';
import {TourlogService} from "../../service/tourlog.service";
import {Tourlog} from "../../tourlog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tourlog-update',
  templateUrl: './tourlog-update.component.html',
  styleUrl: './tourlog-update.component.css'
})
export class TourlogUpdateComponent {
  tourlog: Tourlog;


  constructor(private tourlogService: TourlogService, private router : Router) {
    this.tourlog = new Tourlog();
  }

  onSubmit() {
    this.tourlogService.updateTourlog(this.tourlog).subscribe(
      ()=> {
        console.log('updated successfully');
        this.router.navigate(['/all'])
      },
      error => {
        console.log('error with updating', error);
      }
    )
  }
}
