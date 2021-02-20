import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private searchText = new BehaviorSubject<string>("");
  
  constructor() {  }
   

  //Using behavior subject, we are able to set username as an observable that can be changed using the .next() method.
  updateSearchText(searchTextData: string) {
    this.searchText.next(searchTextData);
  } 

  getSearchText() : Observable<string> {
    return this.searchText.asObservable();
  }

}
