import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {TourFormComponent} from "./tour-form/tour-form.component";
import {TourListComponent} from "./tour-list/tour-list.component";

export const routes: Routes = [
  {path: 'create', component: TourFormComponent},
  {path: 'all', component: TourListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
