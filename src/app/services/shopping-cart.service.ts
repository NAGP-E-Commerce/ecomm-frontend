import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ShoppingCart } from "../models/shopping-cart.model";
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  endpoint = 'http://localhost:8092/ct/cart/{cartId}?cartId=';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCartById(): Observable<ShoppingCart> {
    return this.httpClient.get<ShoppingCart>(this.endpoint + '1')
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
