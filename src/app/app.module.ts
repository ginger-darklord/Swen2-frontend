import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {AppRoutes} from "./app.routes";

import {TourService} from "./service/tour-service.service";
import {MarkerService} from "./service/marker.service";

import {TourFormComponent} from "./tour/tour-form/tour-form.component";
import { TourListComponent} from "./tour/tour-list/tour-list.component";
import {TourUpdateComponent} from "./tour/tour-update/tour-update.component";
import {TourMapComponent} from "./tour/tour-map/tour-map.component";
import {TourDetailComponent} from "./tour/tour-detail/tour-detail.component";
import {TourlogFormComponent} from "./tourlog/tourlog-form/tourlog-form.component";

@NgModule({
  declarations: [
    AppComponent,
    TourFormComponent,
    TourListComponent,
    TourUpdateComponent,
    TourMapComponent,
    TourDetailComponent,
    TourlogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,
    AppRoutes
  ],
  providers: [
    TourService,
    MarkerService
  ],
  exports: [
    TourMapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
