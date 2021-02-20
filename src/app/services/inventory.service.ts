import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Stock } from '../models/Stock';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  endpoint = 'http://localhost:8091/im/inventory';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getStocks(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(this.endpoint + "/all")
      .pipe(
        retry(1),
        catchError(this.processError)
      );
  }

  processError(err) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
