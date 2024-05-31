import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private id:number = 0;

  setNumber(value: number) {
    this.id = value;
  }

  getNumber() {
    return this.id;
  }
}
