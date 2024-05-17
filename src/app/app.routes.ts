import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {TourFormComponent} from "./tour-form/tour-form.component";
import {TourListComponent} from "./tour-list/tour-list.component";
import {TourDeleteComponent} from "./tour-delete/tour-delete.component";
import {TourUpdateComponent} from "./tour-update/tour-update.component";

export const routes: Routes = [
  {path: 'create', component: TourFormComponent},
  {path: 'all', component: TourListComponent},
  {path: 'delete', component: TourDeleteComponent},
  {path: 'update', component: TourUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
