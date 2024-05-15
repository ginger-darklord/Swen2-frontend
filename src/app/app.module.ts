import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {AppRoutes} from "./app.routes";
import {TourService} from "./service/tour-service.service";
import {TourFormComponent} from "./tour-form/tour-form.component";
import { TourListComponent} from "./tour-list/tour-list.component";
import {TourDeleteComponent} from "./tour-delete/tour-delete.component";

@NgModule({
  declarations: [
    AppComponent,
    TourFormComponent,
    TourListComponent,
    TourDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,
    AppRoutes
  ],
  providers: [TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
