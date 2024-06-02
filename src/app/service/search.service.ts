import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private keyword : string = '';

  setKeyword(keyword : string) {
    this.keyword = keyword;
  }

  getKeyword() {
    return this.keyword;
  }
}
