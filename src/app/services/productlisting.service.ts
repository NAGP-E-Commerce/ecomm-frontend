import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductlistingService {

  endpoint = environment.productListingServiceURL;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllProducts(): Observable<Product> {
    return this.httpClient.get<Product>(this.endpoint + '/plp/all')
      .pipe(
        retry(1),
        catchError(this.processError)
      )
  }

  getProductsByCategories(categoryCode: string): Observable<Product> {
    return this.httpClient.get<Product>(this.endpoint + '/plp/ccode/' + categoryCode)
      .pipe(
        retry(1),
        catchError(this.processError)
      )
  }

  getSimilarProductByName(name: string): Observable<Product> {
    if (name != "") {
      return this.httpClient.get<Product>(this.endpoint + '/plp/name/' + name)
        .pipe(
          retry(1),
          catchError(this.processError)
        )
    }
    else {
      return this.getAllProducts();
    }
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
