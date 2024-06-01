import {Component} from '@angular/core'
import {SearchService} from "./service/search.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  title = 'SWEN2_Tourplanner';
  keyword : string | undefined;

  constructor(public searchService: SearchService, public router: Router) {
  }

  onSubmit() {
    this.searchService.setKeyword(this.keyword);
    console.log(this.keyword);
    this.router.navigate(['/search']);
  }
}
