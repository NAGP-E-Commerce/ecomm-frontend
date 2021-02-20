import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  endpoint = environment.orderServiceURL;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  placeOrder(cartId: string): Observable<Boolean> {
    return this.httpClient.post<Boolean>(this.endpoint + 'create/' + cartId, null).pipe(
      retry(1),
      catchError(this.processError)
    );
  }

  getOrdersByUserId(userId): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.endpoint + "/" + userId)
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
