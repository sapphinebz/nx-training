import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  queryProducts() {
    return this.http.get('http://localhost:1150/api/product',).pipe(
      catchError((err) => {
        console.error(err);
        return EMPTY;
      })
    );
  }
}
