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

  cartId = '1';
  endpoint = 'http://localhost:8092/ct/cart/';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCartById(): Observable<Cart> {
    return this.httpClient.get<Cart>(this.endpoint + this.cartId)
      .pipe(
        retry(1),
        catchError(this.processError)
      );
  }

  addProductToCart(productCode: string): Observable<Cart> {
    return this.httpClient.post<Cart>(this.endpoint + 'entry', {
      "cartId": this.cartId,
      "productCode": productCode,
      "quantity": 1
    }).pipe(
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
