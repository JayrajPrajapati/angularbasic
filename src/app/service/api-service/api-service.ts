import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponse } from './productResponseDTO';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  Base_URL = "https://dummyjson.com/products";
  constructor(private http: HttpClient) {
  }
  getProduct() {
    return this.http.get<ProductResponse>(this.Base_URL);
  }
}
