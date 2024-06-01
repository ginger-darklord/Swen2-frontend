import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {TourFormComponent} from "./tour/tour-form/tour-form.component";
import {TourListComponent} from "./tour/tour-list/tour-list.component";
import {TourUpdateComponent} from "./tour/tour-update/tour-update.component";
import {TourMapComponent} from "./tour/tour-map/tour-map.component";
import {TourDetailComponent} from "./tour/tour-detail/tour-detail.component";
import {TourlogFormComponent} from "./tourlog/tourlog-form/tourlog-form.component";
import {TourSearchComponent} from "./tour/tour-search/tour-search.component";

export const routes: Routes = [
  {path: 'create', component: TourFormComponent},
  {path: 'all', component: TourListComponent},
  {path: 'update', component: TourUpdateComponent},
  {path: 'detail', component: TourDetailComponent},
  {path: 'map', component: TourMapComponent},
  {path: 'createTourlog', component: TourlogFormComponent},
  {path: 'search', component: TourSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
