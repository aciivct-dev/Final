import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, observable, throwError } from 'rxjs';
import { ProductModule } from './product/product.module';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MyApiService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getProducts(): Observable<ProductModule> {
    return this.http
      .get<ProductModule>(this.apiURL + '/products')
      .pipe(retry(1), catchError(this.handleError));
  }
  createProduct(prodi: {
    name: string;
    price: number;
    quantity: number;
    photo: any;
  }): 
  Observable<ProductModule> {
    return this.http
      .post<ProductModule>(
        this.apiURL + '/products',
        JSON.stringify(prodi),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
