import { Component } from '@angular/core';
import {Tour} from "../../tour";
import {TourService} from "../../service/tour-service.service";
import {NumberService} from "../../service/number.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {

  tours: Tour[] | undefined;

  constructor(public tourService: TourService, public numberService: NumberService, private router:Router) {}

  ngOnInit() {
    this.tourService.findAll().subscribe(data => {
      this.tours = data;
    })
  }

  delete(id: number | undefined) {
    this.tourService.deleteTour(id).subscribe(
      () => {
        console.log('Tour deleted successfully');
        window.location.reload();
      },
      error => {
        console.error('Tour not deleted successfully', error);
      }
    );
  }

  detail(id:number) {
    this.numberService.setNumber(id);
    this.router.navigate(['/detail']);
  }
}
