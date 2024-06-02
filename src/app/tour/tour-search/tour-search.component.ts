import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Tour} from "../../tour";
import {TourService} from "../../service/tour.service";
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-tour-search',
  templateUrl: './tour-search.component.html',
  styleUrl: './tour-search.component.css'
})
export class TourSearchComponent {
  keyword : string = '';
  tours : Tour[] | undefined;

  constructor(public tourService: TourService, public searchService: SearchService) {
  }

  ngOnInit() {
    this.keyword = this.searchService.getKeyword();
    console.log(this.keyword);
    this.tourService.search(this.keyword).subscribe(data => {
      this.tours = data;
    })
  }

}
