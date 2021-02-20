import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "../models/Cart";
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  endpoint = environment.cartServiceURL;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCartById(cartId): Observable<Cart> {
    return this.httpClient.get<Cart>(this.endpoint + cartId)
      .pipe(
        retry(1),
        catchError(this.processError)
      );
  }

  getCartByUserId(userId): Observable<Cart> {
    return this.httpClient.get<Cart>(this.endpoint + "user/" + userId)
      .pipe(
        retry(1),
        catchError(this.processError)
      );
  }

  addProductToCart(productId: string): Observable<Cart> {
    return this.httpClient.post<Cart>(this.endpoint + 'entry', {
      "cartId": this.getCartIdFromLocalStorage(),
      "productId": productId,
      "quantity": 1
    }).pipe(
      retry(1),
      catchError(this.processError)
    );
  }

  removeProductFromCart(productId: string): Observable<Cart> {
    return this.httpClient.put<Cart>(this.endpoint + 'entry', {
      "cartId": this.getCartIdFromLocalStorage(),
      "productId": productId,
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

  getCartIdFromLocalStorage() {
    return localStorage.getItem("cartId");
  }

}
