import { Component } from '@angular/core';
import {Tour} from "../../tour";
import {TourService} from "../../service/tour.service";
import {NumberService} from "../../service/number.service";
import {Router} from "@angular/router";
import {ReportService} from "../../service/report.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {

  tours: Tour[] | undefined;

  constructor(public tourService: TourService, public numberService: NumberService, private router:Router, private reportService: ReportService) {}

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

  download(id: number | undefined) {
    this.reportService.report(id).subscribe((blob : Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `tour_report_${id}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Error downloading the report', error);
    });
  }
}
