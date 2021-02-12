import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "../models/Cart";
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  endpoint = 'http://localhost:8092/ct/cart/';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCartById(): Observable<Cart> {
    return this.httpClient.get<Cart>(this.endpoint + '{cartId}?cartId=' + '1')
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
