import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductCategory } from '../models/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint = 'http://localhost:8090/'
  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProductCategories(): Observable<ProductCategory> {
    return this.httpClient.get<ProductCategory>(this.endpoint + '/productcategory/')
      .pipe(
        retry(1),
        catchError(this.processError)
      )
  }

  getProductCategoryByName(name: string): Observable<ProductCategory> {
    return this.httpClient.get<ProductCategory>(this.endpoint + '/productcategory/' + name)
      .pipe(
        retry(1),
        catchError(this.processError)
      )
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
