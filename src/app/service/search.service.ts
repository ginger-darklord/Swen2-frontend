import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private keyword : string |undefined;

  setKeyword(keyword : string |undefined) {
    this.keyword = keyword;
  }

  getKeyword() {
    return this.keyword;
  }
}
